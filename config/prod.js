//we are in prouduction
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGODB_URI,
    cookieKey:process.env.COOKIE_KEY,
    'stripePublishablekey':process.env.STRIPE_PUB_KEY,
    stripeSecretKey:process.env.STRIPE_SEC_KEY,
    sendGridKey:process.env.SENDGRID_KEY,
    redirectDomain:process.env.REDIRECT_URL
}
