_ = @_ or require 'underscore'

exports.jqCallback = (callback) ->
  return {
    success: -> callback.apply(this, [null].concat(_.toArray(arguments)))
    error: (resp) -> callback(resp or [new Error("error received")])
  }
