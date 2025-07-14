// netlify/functions/google-login.js

exports.handler = async (event, context) => {
  return {
    statusCode: 302,
    headers: {
      Location: "https://ekfucvqycibcdnoltsye.supabase.co/auth/v1/authorize?provider=google&redirect_to=https://komposid.netlify.app/auth/v1/callback"
    }
  }
}
