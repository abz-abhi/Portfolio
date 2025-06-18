const ExperienceBox =({image,title,description,buttonLink})=>{
    return(
        <div class="md:w-[570px] md:h-[192.68px] bg-gradient-to-br shadow-2xl from-[#1C0F35] via-[#3D1C68] to-[#6E34B8]  border-t-4 border-textPurple rounded-xl flex items-center justify-around gap-10">
          <img className="md:h-fit md:mr-0 xxs:ml-6 xxs:h-20 " src={image} alt="" />
          <div class="max-w-72 flex flex-col gap-1 md:p-0 xxs:p-2 ">
            <p class='md:text-xl xxs:text-lg'>{title}</p>
            <p class='md:text-sm xxs:text-sm xxs:line-clamp-2'>{description}
            </p>
            <a href={buttonLink}  class="border-2 border-indigo-600 p-2 w-32 text-center text-sm rounded-md ">LEARN MORE</a>
          </div>
        </div>
    )
}
export default ExperienceBox;