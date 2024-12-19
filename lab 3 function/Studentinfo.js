
//How to create local module

//exposing both variable and function outside the Module


//declaring two arrow functions and one constant variable

const getStdName= () =>
    {return 'rock'         //no arguments here inside the parameters
    }
const getUniName= () =>
    {return ("UEL")
    }

//export a value in this case date of birth
const dobH= "10/7/2000"
exports.getName= getStdName
exports.location= getUniName
exports.dob= dobH

// export function with parameters
exports.Stdgrade=(marks) => {
    if(marks>50 && marks<70)
        return("Grade B")
    else
    return("Grade A")
}