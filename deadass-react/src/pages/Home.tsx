// import Logo from "../components/logo";
// import SearchBar from "../components/Searchbar";
// import UploadBox from "../components/Uploadbox";
// import '../index.css';

// function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center">
//         <div className="text-red-500 text-5xl">
//   TEST
// </div>
      
//       {/* Top branding area */}
//       <div className="mt-10 mb-8">
//         <Logo />
//       </div>

//       {/* Search section (main focus) */}
//       <div className="w-full max-w-xl mb-10">
//         <SearchBar />
//       </div>

//       {/* Upload section (secondary action) */}
//       <div className="w-full max-w-md">
//         <UploadBox />
//       </div>

//     </div>
//   );
// }

// export default Home;

import Logo from "../components/logo";
import SearchBar from "../components/Searchbar";
import UploadBox from "../components/Uploadbox";
import "../App.css";

function Home() {
  return (
    <div className="home-page">
      <Logo />
      <SearchBar />
      <UploadBox />
    </div>
  );
}

export default Home;