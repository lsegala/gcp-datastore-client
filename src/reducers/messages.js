const growlMessages = (state = {messages:[]}, action) => {
	switch (action.type) {
	    case 'SHOW_MESSAGE':
            let messages=[];
            messages.push(action.message);
		    return {messages:messages};
        default:
            return state;
    }
}

export default growlMessages;