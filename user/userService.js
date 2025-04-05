import { User } from './schema/userSchema.js';
import { Store } from '../store/schema/storeSchema.js';
import { otpSendToCustomer } from '../mailer/sendMail.js'
export const signupFunction = async (dto) => {
  try {
    const existingUser = await User.findOne({ email: dto.email });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const newUser = new User({ ...dto });
    await newUser.save();

    return { message: 'User registered successfully' };
  } catch (error) {
    throw new Error('Failed to sign up: ' + error.message);
  }
}; 


export const loginFunction = async (dto) => {
  try {
    const user = await User.findOne({ email: dto.email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = dto.password === user.password;
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const store = await Store.findOne({ userId: user._id });
    const storeInfo = store ? { success: true, storeId: store._id  , storeName: store.storeName , storeLogo : store.storeLogo , storeStatus : store.suspend} : { success: false, storeId: null };

    return {
      message: 'Login successful',
      user: {
        userId: user._id,
        email: user.email,
        role: user.role, 
        rewards : user.rewards,
        store: storeInfo.success,
        storeId: storeInfo.storeId, 
        storeName: storeInfo.storeName,
        storeLogo : storeInfo.storeLogo, 
        storeStatus : storeInfo.storeStatus,
      },
    };
  } catch (error) {
    throw new Error('Failed to log in: ' + error.message);
  }
};
export const userData = async (id) => {
  try {
   
    console.log(id);

    const store = await Store.findOne({ userId: id });
    const storeInfo = store ? { success: true, storeId: store._id  , storeName: store.storeName , storeLogo : store.storeLogo , storeStatus : store.suspend} : { success: false, storeId: null };

    return {
      message: 'User',
      user: {
        store: storeInfo.success,
        storeId: storeInfo.storeId, 
        storeName: storeInfo.storeName,
        storeLogo : storeInfo.storeLogo, 
        storeStatus : storeInfo.storeStatus,
      },
    };
  } catch (error) {
    throw new Error('Failed to log in: ' + error.message);
  }
};

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

export const resetOTPNumber = async (email) => {
  try {
    
    const code = generateOTP()
    otpSendToCustomer(email,code)

    return {
      success: true,
      otp:code
    };

  } catch (error) {
    return {
      success: false,
    };
  }
};

export const updatePass = async (email,password) => {
  try {
    console.log(email,password)

    const user = await User.updateOne({ email: email }, {password:password});

    console.log(user)

    return {
      success: true,
    };

  } catch (error) {
    console.log(error)
    return {
      success: false,
    };
  }
};


