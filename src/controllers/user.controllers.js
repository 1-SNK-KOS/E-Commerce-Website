import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js"
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";


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

export {
  registerUser,
}