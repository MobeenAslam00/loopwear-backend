import { signupFunction, loginFunction, resetOTPNumber, updatePass } from './userService.js';

export const signup = async (req, res) => {
  try {
    const result = await signupFunction(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const result = await loginFunction(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 

export const resetOTP = async (req, res) => {
  try {
    const result = await resetOTPNumber(req.body.email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reset = async (req, res) => {
  try {
    const result = await updatePass(req.body.email,req.body.password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};








