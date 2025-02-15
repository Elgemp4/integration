export default function gallery() {
    const $firstPhoto = document.querySelector("#first_photo");

    const photoCount = document.querySelector('#photo_gallery').children.length;
    
    const $rightButton = document.querySelector("#right_button")
    const $leftButton = document.querySelector("#left_button")
    
    let currentPhoto = 0;
    
    //This method calculate the next index depending on the direction we want to go (+1 or -1)
    function shiftToDirection(direction){
        //This is a simple formula that warps the index when it goes below 0 or above photoCount
        //Example : 
        // (0 - 1 + 6) % 6 = 5  % 6  = 5 | Looped to the end 
        // (5 + 1 + 6) % 6 = 12 % 6  = 0 | Looped back to the start
        currentPhoto = (currentPhoto + direction + photoCount) % photoCount
    
        //Offset the shown photos
        $firstPhoto.style = `margin-left: -${currentPhoto * 100}%`
    }
    
    $rightButton.addEventListener("click", () => {
        shiftToDirection(+1);
    });
    
    $leftButton.addEventListener("click", () => {
        shiftToDirection(-1);
    });
}


