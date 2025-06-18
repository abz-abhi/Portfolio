const ExperienceBox =({image,title,description,buttonLink})=>{
    return(
        <div class="w-[570px] h-[192.68px] bg-gradient-to-br shadow-2xl from-[#1C0F35] via-[#3D1C68] to-[#6E34B8]  border-t-4 border-textPurple rounded-xl flex items-center justify-center gap-10">
          <img src={image} alt="" />
          <div class="max-w-72 flex flex-col gap-1">
            <p class='text-xl'>{title}</p>
            <p class='text-sm'>{description}
            </p>
            <a href={buttonLink}  class="border-2 border-indigo-600 p-2 w-32 text-center text-sm rounded-md ">LEARN MORE</a>
          </div>
        </div>
    )
}
export default ExperienceBox;