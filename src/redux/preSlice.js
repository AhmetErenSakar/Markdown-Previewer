import { createSlice } from '@reduxjs/toolkit'


export const preSlice = createSlice({
    name: 'pre',
    initialState: {
        helpItem: `
Heading
=======
        
        
Sub-heading
-----------
       
### Another deeper heading
        
Paragraphs are separated
by a blank line.
        
Leave 2 spaces at the end of a line to do a
line break
        
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
        
Shopping list:
        
* apples
* oranges
* pears
        
Numbered list:
        
1. apples
2. oranges
3. pears
        
The rain---not the reign---in
Spain.
        
*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
        ,
        Qhelp: false,
        items: [
            {
                title: "this is user input"
            },
        ],
    }
    ,
    reducers: {
        updatePre: (state, action) => {
            state.items[0].title = action.payload
        },
        helpBtn: (state, action) => {
            state.items[0].title = state.helpItem;
        }, updateBtn: (state, action) => {
            state.items[0].title = 'this is user input';
        }
    },
})

export const { updatePre, helpBtn, updateBtn } = preSlice.actions;

export default preSlice.reducer;