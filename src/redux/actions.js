import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    COMMENT_CREATE,
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENTS_LOAD,
    LOADER_DISPLAY_ON,
    LOADER_DISPLAY_OFF,
} from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText (text) {
    return {
        type: INPUT_TEXT,
        payload: text
    }
}

export function commentCreate (text, id) {
    return {
        type: COMMENT_CREATE,
        payload: {text, id}
    }
}

export function commentUpdate (text, id) {
    return {
        type: COMMENT_UPDATE,
        payload: {text, id}
    }
}

export function commentDelete (id) {
    return {
        type: COMMENT_DELETE,
        payload: id
    }
}

export function commentsLoad () {
    return async dispatch => {
          dispatch(loaderOn())
          const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=9&max_length=15')
          const jsonData = await response.json()
          dispatch({
              type: COMMENTS_LOAD,
              payload: jsonData
          });
          dispatch(loaderOff())

    }
}

export function loaderOn () {
    return {
        type: LOADER_DISPLAY_ON,
    }
}

export function loaderOff () {
    return {
        type: LOADER_DISPLAY_OFF,
    }
}

