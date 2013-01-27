_ = @_ or require 'underscore'

exports.jqCallback = (callback) ->
  return {
    success: -> callback.apply(this, [null].concat(_.toArray(arguments)))
    error: (resp) -> callback(resp or [new Error("error received")])
  }

# exports.bbCallback = (callback) ->
#   return {
#     success: -> callback.apply(this, [null].concat(_.toArray(arguments)))
#     error: (model, resp) -> callback(resp or [new Error("Backbone error received")])
#   }

# exports.bbCallbackUploader = (callback) ->
#   return {
#     success: -> callback.apply(this, [null].concat(_.toArray(arguments)))
#     error: (model, resp) -> callback(resp or [{ code: UPLOAD_ERROR.REQUEST_TIMEOUT}])
#   }