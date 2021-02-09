

const validate_payload = ({ validations_array }) => {
    
    return (req, res, next) => {

        const payload = req.body;
        let should_proceed = true;

        validations_array.forEach((validation) => {

            const field_name = validation.field_name;
            const field_value = payload[field_name];

            const is_valid = payload.hasOwnProperty(field_name) && validation.is_valid(field_value);

            if(!is_valid) {
                should_proceed = false;
                return;
            }

        });

        if(should_proceed) {
            return next();
        }

        else {
            return res.status(400).send('bad format');
        }
        
    }
}


module.exports = validate_payload;