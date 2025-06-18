const ThirdPage = () => {
  return (
    <div class="">
      {/* Example project 1 */}
      <div class="flex flex-row justify-center items-center mt-56 relative ">
        <div class="flex flex-wrap flex-col z-20 gap-4 w-fit h-fit">
          <div>
            <p class="text-1xl text-textPurple font-normal">Featured Project</p>
            <p class="text-3xl font-bold text-[#CCD6F6]">Example Project</p>
          </div>
          <p class="max-w-[699px] text-xl bg-white/10 rounded-xl backdrop-blur-2xl max-h-[165px] text-[#CCD6F6] p-6">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <div class="flex ml-8 gap-4">
            <img src="../assets/vectors/Vectorpoint.png" alt="" />
            <img src="../assets/vectors/Vectorpoint.png" alt="" />
          </div>
        </div>
        <div class="w-[583px] h-[341px] -ml-20 bg-hdbackground z-10 overflow-hidden">
          <img
            class="ml-10 mt-10 rounded-lg"
            src="../assets/images/Screenshot From 2025-06-16 15-22-44.png"
            alt=""
          />
        </div>
        <div class="w-[800px] h-[720px] ml-[30rem] mt-24 bg-gradient-radial from-[#5D1C99] via-[#1E003E] to-black rounded-full absolute z-0"></div>
      </div>
      {/* Example project 2 */}
      <div class="flex flex-row-reverse justify-center items-center mt-56 relative ">
        <div class="flex flex-wrap flex-col items-end z-20 gap-4 w-fit h-fit">
          <div class='flex flex-col items-end'>
            <p class="text-1xl text-textPurple font-normal">Featured Project</p>
            <p class="text-3xl font-bold text-[#CCD6F6]">Example Project</p>
          </div>
          <p class="max-w-[699px] text-xl bg-white/10 rounded-xl backdrop-blur-2xl max-h-[165px] text-[#CCD6F6] p-6">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <div class="flex mr-8 gap-4">
            <img src="../assets/vectors/Vectorpoint.png" alt="" />
            <img src="../assets/vectors/Vectorpoint.png" alt="" />
          </div>
        </div>
        <div class="w-[583px] h-[341px] -mr-20 bg-hdbackground z-10 overflow-hidden">
          <img
            class="mt-10 -ml-10 rounded-lg"
            src="../assets/images/Screenshot From 2025-06-16 15-41-03.png"
            alt=""
          />
        </div>
        <div class="w-[572px] h-[641px] mr-[55rem]  bg-gradient-radial from-[#5D1C99] via-[#1E003E] to-black rounded-full absolute z-0"></div>
      </div>
    </div>
  );
};
export default ThirdPage;
