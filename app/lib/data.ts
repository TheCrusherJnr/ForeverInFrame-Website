export const IMG = {
  heroVideo: "https://foreverinframe.com.au/wp-content/uploads/2024/09/Untitled_2.1.9-1024x576.jpg",
  heroAlt1: "https://foreverinframe.com.au/wp-content/uploads/2024/07/Untitled_3.2.5-1024x576.jpg",
  heroAlt2: "https://foreverinframe.com.au/wp-content/uploads/2024/08/Untitled_4.1.6-1024x576.jpg",

  kelseyKyle: "https://foreverinframe.com.au/wp-content/uploads/2024/08/Untitled_4.1.5-scaled.jpg",
  amandaSean: "https://foreverinframe.com.au/wp-content/uploads/2024/02/Untitled_5.16.1-1.jpg",
  isabelKyri: "https://foreverinframe.com.au/wp-content/uploads/2025/01/Untitled-design-4.png",
  sarahBaden: "https://foreverinframe.com.au/wp-content/uploads/2023/11/Untitled_2.54.1-scaled.jpg",
  alexLyneta: "https://foreverinframe.com.au/wp-content/uploads/2024/09/Untitled-design-2.png",
  maxSheridan: "https://foreverinframe.com.au/wp-content/uploads/2024/02/Untitled_2.36.5.jpg",
  jennaRyen: "https://foreverinframe.com.au/wp-content/uploads/2025/01/Untitled_6.171.1.jpg",
  kateLucas: "https://foreverinframe.com.au/wp-content/uploads/2024/01/2_2.262.2.png",
  amandaSean2: "https://foreverinframe.com.au/wp-content/uploads/2024/02/Untitled_4.32.1-scaled.jpg",

  matthew1: "https://foreverinframe.com.au/wp-content/uploads/2023/03/20230103_165711-scaled.jpg",
  matthew2: "https://foreverinframe.com.au/wp-content/uploads/2023/04/1477628-scaled-e1680758129169-837x1024.jpg",
  matthew3: "https://foreverinframe.com.au/wp-content/uploads/2025/11/1B3A0951-1-683x1024.jpg",

  extra1: "https://foreverinframe.com.au/wp-content/uploads/2023/12/Untitled_2.36.3.jpg",
  extra2: "https://foreverinframe.com.au/wp-content/uploads/2024/08/Untitled_4.7.8-scaled.jpg",
  extra3: "https://foreverinframe.com.au/wp-content/uploads/2023/11/Untitled_3.43.2-scaled.jpg",
  extra4: "https://foreverinframe.com.au/wp-content/uploads/2024/07/Untitled_2.3.8-scaled.jpg",
  extra5: "https://foreverinframe.com.au/wp-content/uploads/2024/02/Untitled_5.16.1-scaled.jpg",
};

export type Film = {
  slug: string;
  img: string;
  names: string;
  venue: string;
  year: string;
  num: string;
  note: string;
};

export const FILMS: Film[] = [
  { slug: "films-kelsey-and-kyle", img: IMG.kelseyKyle, names: "Kelsey & Kyle", venue: "Montville", year: "2025", num: "01",
    note: "A Hinterland wedding with some of the most heartfelt speeches I've ever filmed." },
  { slug: "films-isabel-and-kyri", img: IMG.isabelKyri, names: "Isabel & Kyri", venue: "Brisbane", year: "2024", num: "02",
    note: "They might be smiling in literally every single shot." },
  { slug: "films-amanda-and-sean", img: IMG.amandaSean, names: "Amanda & Sean", venue: "Sunshine Coast", year: "2024", num: "03",
    note: "Beach ceremony, salt air, a sunset kiss you could feel from behind the lens." },
  { slug: "films-sarah-and-baden", img: IMG.sarahBaden, names: "Sarah & Baden", venue: "The Grounds Estate", year: "2023", num: "04",
    note: "Close family only, the kind of quiet day where every glance matters." },
  { slug: "films-alex-and-lyneta", img: IMG.alexLyneta, names: "Alex & Lyneta", venue: "Brisbane", year: "2024", num: "05",
    note: "Shot vintage-camcorder style. New to me at the time — now one of my favourite films." },
  { slug: "films-max-and-sheridan", img: IMG.maxSheridan, names: "Max & Sheridan", venue: "Scenic Rim", year: "2023", num: "06",
    note: "Pure joy. You couldn't take the smiles off their faces if you tried." },
  { slug: "films-jenna-and-ryen", img: IMG.jennaRyen, names: "Jenna & Ryen", venue: "Brisbane", year: "2024", num: "07",
    note: "One of the most fun weddings I've ever been to." },
];

export type Testimonial = {
  img: string;
  who: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { img: IMG.sarahBaden, who: "Sarah & Baden",
    quote: "Thank you for being our videographer, and feeling more like a friend the whole time. Baden and I are shocked at some of the incredible shots you took and pieced together. It really captures the whole day." },
  { img: IMG.amandaSean2, who: "Amanda & Sean",
    quote: "You have done an amazing job! Thank you so much for capturing the day and spending the time making this video. You have done so well taking on board everything that we asked for." },
  { img: IMG.kelseyKyle, who: "Kelsey & Kyle",
    quote: "What a beautiful piece of art you have created of our day. It honestly turned out better than we could have hoped. Our families are absolutely blown away." },
  { img: IMG.jennaRyen, who: "Jenna & Ryen",
    quote: "It was so nice to re-live our magical day. We tend to forget all the little things as it was so busy but this was just... wow." },
  { img: IMG.kateLucas, who: "Kate & Lucas",
    quote: "Thank you for capturing such a beautiful moment of our lives." },
];
