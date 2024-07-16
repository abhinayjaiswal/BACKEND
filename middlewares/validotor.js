import joi from 'joi'

const validator = (req, res, next) => {

    const { email, pass } = req.body
    console.log(email, pass)
    const schema = joi.object({

        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().min(3).max(30),

        pass: joi.string().required()

    })
    try {
        const value = schema.validate(pass)
        console.log(value)
    }
    catch (err) {
        return res.status(400).json({ erro: err.detail })
    }
    next()

}

export default validator