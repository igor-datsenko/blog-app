// registration
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {signToken} from "../utils/token.service.js";

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const isUserExist = await User.findOne({ username });

        if (isUserExist) {
            return res.status(400).json({ message: 'User already exist' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({user: newUser, message: 'User created successfully'});

        console.log(req.body, isUserExist);
    } catch (error) {
        console.log('error');
    }

    console.log('register');
};

// login
export const login =  async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(400).json({ message: 'Please provide username and password' });
        }

        const user = await User.findOne({ username })
        console.log(user);

        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = signToken({ userId: user._id });

        res.status(200).json({ token });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//get user
export const getUser = async (req, res) => {

    try {
        let userId = req.decoded.userId;

        const user = await User.findOne({ _id: userId }, { password: 0, __v : 0 })

        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const token = signToken({userId });

        res.json({user, token});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};