express = require "express"
stylus  = require "stylus"
nib     = require "nib"


app = module.exports = express.createServer()

# stylus compile function
compile = (str, path) ->
  return stylus(str)
    .define("url", stylus.url({ paths: [__dirname + "/public"] }))
    .set("filename", path)
    .set("warn", true)
    .set("compress", false)   # compress CSS
    .use(nib())    


app.configure ->
  # stylus middleware
  app.use stylus.middleware
    src    : __dirname + "/styls"  # styl files should be placed inside this folder
    dest   : __dirname + "/public" # CSS files will be complied to public directory
    compile: compile    # compile function

  app.use express.static __dirname + "/public"


app.listen 8082
console.log "server started on port 8082. Open http://localhost:8082 in your browser"