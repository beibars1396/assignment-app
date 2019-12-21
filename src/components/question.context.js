import React, { createContext } from 'react'

const PostContext = createContext(null)

export default ({ item, navigation, children }) => {
    const contextValue = {
        item,
        onQuestionNavigate: (focus = null) => () => navigation.push('Question', { item, focus })
    }

    return (
        <PostContext.Provider value={contextValue}>
            {children}
        </PostContext.Provider>
    )
}