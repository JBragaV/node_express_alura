function meuMiddle(req, res, next) {
    req.jocimar = "Jocimar Caiado Braga";
    next();
}

export default meuMiddle;