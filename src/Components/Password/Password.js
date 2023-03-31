import { useEffect, useState } from "react";

const password = () => {
    const [password, setPassword] = useState("")
    // this function will take a random uppercase letter...........
    const generateRandomUpperLetter = (num) => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomIndex = Math.floor(Math.random() * letters.length);
        if (randomIndex > num) {
            randomIndex = randomIndex - num
        }
        const randomLetter = letters[randomIndex];
        return randomLetter
    };


    // this function will take a random lowercase letter...........
    const generateRandomLowerLetter = (num) => {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let randomIndex = Math.floor(Math.random() * letters.length);
        if (randomIndex > num) {
            randomIndex = randomIndex - num
        }
        const randomLetter = letters[randomIndex];
        return randomLetter;
    };

    // this function will take random number 1-99 
    const generateRandomNumber = (num, num2) => {
        const randomNumber = Math.floor(Math.random() * num2 + num)
        return randomNumber;
    }

    // this function will take a random sign 
    const generateRandomSign = (num) => {
        const sign = "!@#$%^&*"
        let randomSignIndex = Math.floor(Math.random() * sign.length);
        if (randomSignIndex > num) {
            randomSignIndex = randomSignIndex - num
        }
        const randomSign = sign[randomSignIndex]
        return randomSign;
    }

    useEffect(() => {
        generateRandomUpperLetter();
        generateRandomLowerLetter();
        generateRandomNumber();
        generateRandomSign();
    }, [])


    // random password handle function
    const randomPassword = (length) => {
        let pass;
        if (length === 0) {
            pass = generateRandomUpperLetter(2) + generateRandomSign(3) + generateRandomLowerLetter(3) + generateRandomUpperLetter(1) + generateRandomNumber(2, 100) + generateRandomSign(1) + generateRandomLowerLetter(2) + generateRandomUpperLetter(4) + generateRandomLowerLetter(1) + generateRandomSign(2) + generateRandomNumber(3, 10)
            setPassword(pass)
        }
        else if (length === 8) {
            pass = generateRandomUpperLetter(2) + generateRandomSign(3) + generateRandomNumber(1, 1) + generateRandomLowerLetter(3) + generateRandomUpperLetter(1) + generateRandomNumber(2, 10) + generateRandomSign(1) + generateRandomLowerLetter(2)
            if (pass.length > 8) {
                randomPassword(8)
                return
            }
            setPassword(pass)

        }
        else if (length === 10) {
            pass = generateRandomNumber(1, 10) + generateRandomUpperLetter(2) + generateRandomSign(3) + generateRandomLowerLetter(3) + generateRandomUpperLetter(1) + generateRandomNumber(2, 100) + generateRandomSign(1) + generateRandomLowerLetter(2) + generateRandomUpperLetter(4) + generateRandomNumber(3, 1);
            if (pass.length > 10) {
                randomPassword(10)
                return
            }
            setPassword(pass)
        }
        else if (length === 12) {
            pass = generateRandomNumber(1, 10) + generateRandomUpperLetter(2) + generateRandomLowerLetter(1) + generateRandomSign(3) + generateRandomLowerLetter(3) + generateRandomUpperLetter(1) + generateRandomNumber(2, 100) + generateRandomSign(1) + generateRandomLowerLetter(2) + generateRandomUpperLetter(4) + generateRandomNumber(3, 1);
            if (pass.length > 12) {
                randomPassword(12)
                return
            }
            setPassword(pass)
        }


    }

    return (
        <div className="w-3/5 mx-auto h-60 p-5 rounded-xl bg-opacity-60 my-5 bg-gray-600 flex flex-col justify-center items-center gap-3">
            <div className="w-2/5 h-9 bg-gray-300 rounded-md bg-opacity-80 text-gray-100"> <p className=" text-2xl text-center font-sans">{password}</p></div>
            <button onClick={() => randomPassword(0)} className="bg-pink-700 bg-gradient-to-tr from-violet-500 px-5 py-1 rounded-md text-white">Generate</button>

            <div className="flex justify-center items-center gap-5 mt-5">
                <button onClick={() => randomPassword(8)} className="bg-pink-700 bg-gradient-to-t from-purple-700 text-white rounded-full p-1 w-7 h-7 flex justify-center items-center cursor-pointer">8</button>
                <button onClick={() => randomPassword(10)} className="bg-pink-700 bg-gradient-to-t from-purple-700 text-white rounded-full p-1 w-7 h-7 flex justify-center items-center cursor-pointer">10</button>
                <button onClick={() => randomPassword(12)} className="bg-pink-700 bg-gradient-to-t from-purple-700 text-white rounded-full p-1 w-7 h-7 flex justify-center items-center cursor-pointer">12</button>
            </div>
            <p className="text-center text-white font-light mt-1">You can also choose your password length</p>
        </div>
    );
};

export default password;