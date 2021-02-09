
const validate_header = ({ header_name, header_value }) => {
    return (req, res, next) => {
        if(req.header(header_name) == header_value) {
            next();
        }

        else {
            res.status(415).send('Wrong ' + header_name);
        }
    }
}


module.exports = validate_header;