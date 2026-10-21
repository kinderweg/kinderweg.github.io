import React from "react";

import img1 from "../images/Montessori-style_musical_instrument.jpeg";
import img2 from "../images/Montessori_Color_ed_Bead_Stairs.jpeg";
import img3 from "../images/Montessori_Large_Button_Dressing_Frame.jpeg";
import img4 from "../images/Montessori_Seguin_Board.jpeg";
import img5 from "../images/WhatsApp Image 2026-08-23 at 10.33.47 PM.jpeg";
import img6 from "../images/WhatsApp Image 2026-08-23 at 10.35.49 PM.jpeg";

const galleryImages = [
  { src: img1, title: "Learning Through Play" },
  { src: img2, title: "Exploring Colors & Numbers" },
  { src: img3, title: "Little Hands, Big Skills" },
  { src: img4, title: "Discovering the World of Numbers" },
  { src: img5, title: "Everyday Life Skills" },
];

function GallerySection() {
  return (
    <section id="gallery" className="bg-yellow-50 py-14 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black text-blue-950 text-center">
        Our Happy Little World
        </h1>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          A glimpse of our joyful classrooms, Montessori activities, and memorable learning moments.
        </p>

        <div className="mt-10 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 w-max pb-4">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="snap-start w-72 md:w-80 flex-shrink-0 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-950">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Beautiful moments from our learning environment.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;