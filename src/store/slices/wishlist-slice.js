import cogoToast from 'cogo-toast';
const { createSlice } = require('@reduxjs/toolkit');

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
            if(isInWishlist > -1){
                cogoToast.info("Хүслийн жагсаалтанд байна", {position: "bottom-left"});
            } else {
                state.wishlistItems.push(action.payload);
                cogoToast.success("Хүслийн жагсаалтанд нэмлээ", {position: "bottom-left"});
            }
            
        },
        deleteFromWishlist(state, action){
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
            cogoToast.error("Хүслийн жагсаалтаас хаслаа", {position: "bottom-left"});
        },
        deleteAllFromWishlist(state){
            state.wishlistItems = []
        }
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
