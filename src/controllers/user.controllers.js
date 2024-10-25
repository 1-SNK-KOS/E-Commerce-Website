import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js"
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";


const generateAccessAndRefreshToken = async(user) => {
    // here u can take argument of only user._id and then have a db call and get the user details but I try this //REVIEW 
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({validateBeforeSave : false});

    return {
        accessToken,
        refreshToken,
    }
}


const registerUser = asyncHandler(async (req, res) => {
  // Steps for registering a user
  // 1. Take the data from users from frontend
  // 2. validate the data (email,not empty)
  // 3. check if user exists or not (by email)
  //3. create user object - add entry  it in DB
  // 4. check for success or failure 
  // 5. remove the password and refreshToken from response (if success)
  // 5. return the resp accordingly


  const { email, password, fullName } = req.body;
  console.log(req.body);

  if (
    [fullName, email, password].some((field) =>
      field?.trim() === "")
  ) {
    throw new apiError(400, "Please provide all values");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new apiError(409, "User already exists");
  }

  console.log(req.file);

  const avatarLocalPath = req.file?.path; // for one file (upload.single)


  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const user = await User.create({
    fullName,
    email,
    password,
    avatar: avatar?.url || ""
  })

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if (!createdUser) {
    throw new apiError(500, "Failed to create user");
  }

  return res.status(200).json(
    new apiResponse(201, "User created successfully", createdUser)
  )


})

const loginUser = asyncHandler(async (req,res) => {
     // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const { email,password } = req.body;

    if(!email && !password){
        throw new apiError(400,"Please provide email and password");
    }

    const user = await User.findOne({email})

    if(!user){
      throw new apiError(404,"User not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
      throw new apiError(400,"Invalid password");
    }

    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user); //REVIEW 

    //either update ur user's refresh token  or make a db call acc to need (user.refreshToken = refreshToken)

    const loggedInUser = await User.findByIdAndUpdate(user._id).select("-password -refreshToken");

    if(!loggedInUser){
      throw new apiError(500,"Failed to login user");
    }

    const  cookieOptions = {
      httpOnly : true,
      secure : true,
    }

    return res
              .status(200)
              .cookie("accessToken",accessToken,cookieOptions)
              .cookie("refreshToken",refreshToken,cookieOptions)
              .json(
                new apiResponse(
                  200,
                  "User logged in successfully",
                {
                  user : loggedInUser,accessToken,refreshToken
                }
              )
              )

})

const logoutUser = asyncHandler(async(req,res) => {
// I want user info but can't ask user to give it and take it throught req.body , so let's take the use of cookies store in user but to get access of the info from cookies we have to use req.cookies and to get the required info after decoding it so better let's make a middleware (custom middleware) and attach it to req and then use it here as req.(any name you want)

const user = req.user;

 const updateUser = await User.findByIdAndUpdate(
  user._id,
  {
    $unset : {
      refreshToken : 1 // this removes the field from document and so the update document do not contain refreshToken and therefore it is empty
    }
  },
  {
    new : true
  }
)

const cookieOptions = {
  httpOnly : true,
  secure : true,
}

return res
          .status(200)
          .clearCookie("accessToken",cookieOptions)
          .clearCookie("refreshToken",cookieOptions)
          .json(
            new apiResponse(
              200,
              "User logged Out",
              {}
            )
          )

})

export {
  registerUser,
  loginUser,
  logoutUser,
}