// bookDetails.js

import uzumaki from '../assets/bookCovers/uzumaki.png';
import gyo from '../assets/bookCovers/gyo.png';
import fragments from '../assets/bookCovers/fragmentsOfHorror.png';
import tomie from '../assets/bookCovers/tomie.png';
import shiver from '../assets/bookCovers/shiver.png';
import frankenstein from '../assets/bookCovers/frankenstein.png';
import Smashed from '../assets/bookCovers/smashed.png';
import noLongerHuman from '../assets/bookCovers/noLongerHuman.png';
import twistedVisions from '../assets/bookCovers/twistedVisions.png';
import venusInTheBlindSpot from '../assets/bookCovers/venusInTheBlindSpot.png';
import remina from '../assets/bookCovers/remina.png';
import lovesickness from '../assets/bookCovers/lovesickness.png';
import sensor from '../assets/bookCovers/sensor.png';
import deserter from '../assets/bookCovers/deserter.png';


// import other images similarly...

const bookDetails = {
  book1: {
    title: 'Uzumaki',
    description: `A curse hangs over the small, foggy Japanese coastal town of
      Kurozu-cho. According to Kirie Goshima's withdrawn boyfriend Shuichi Saito,
      the town is haunted not by a person or creature but by the pattern uzumaki.
      A spiral and hypnotic secret form of the world that manifests in everything.
      From seashells to maelstroms in the sea and to the human body. As the anxiety
      spreads, the inhabitants of Kurozu-cho are drawn deeper and deeper into the
      endless maelstrom…`,
    edition: 'UZUMAKI - 3-in-1 Deluxe Edition',
    format: 'HARDCOVER',
    publicationDate: 'October 15, 2013',
    isbn: 'ISBN-10: 1421561328',
    image: uzumaki,
  },
    book2: {
      title: "Gyo",
      description: "The floating smell of death hangs over the island. What is it? A strange, legged fish appears on the scene... So begins Tadashi and Kaori's spiral into the horror and stench of the sea. Here is the creepiest masterpiece of horror manga ever from the creator of Uzumaki, Junji Ito. Hold your breath until all is revealed.",
      image: gyo,
      coverType: "HARDCOVER",
      publicationDate: "April 21, 2015",
      isbn: "ISBN-10: 1421579154",
      backgroundColor: "#D0282F"
    },
    book3: {
      title: "Fragments of Horror",
      description: "An old wooden mansion that turns on its inhabitants. A dissection class with a most unusual subject. A funeral where the dead are definitely not laid to rest. Ranging from the terrifying to the comedic, from the erotic to the loathsome, these stories showcase Junji Ito's long-awaited return to the world of horror.",
      image: fragments,
      coverType: "HARDCOVER",
      publicationDate: "June 16, 2015",
      isbn: "ISBN-10: 1421580799",
      backgroundColor: "#E54B23"
    },
    book4: {
      title: "Tomie: Complete Deluxe Edition",
      description: "I “Tomie: Complete Deluxe Edition\" møder vi Tomie Kawakami, der bliver dræbt gang på gang… og alligevel formår at vende tilbage. Hun er en sand femme fatale, der med sit smukke, sorte hår og skønhedsmærke under øjet formår at forføre alle de mænd, hun vil. Hun kan også få dem til at begå mord, også selvom Tomie selv er ofret. Mens den ene mand gerne vil have hende for sig selv, så er den anden skrækslagen for denne udødelige dæmonkvinde. Det går snart op for dem, at ligemeget hvor mange gange de dræber hende, så bliver verden aldrig fri for Tomie.",
      image: tomie,
      coverType: "HARDCOVER",
      publicationDate: "December 20, 2016",
      isbn: "ISBN-10: 1421590565",
      backgroundColor: "#D72531"
    },
    book5: {
      title: "Shiver: Junji Ito Selected Stories",
      description: "An arm peppered with tiny holes dangles from a sick girl’s window… After an idol hangs herself, balloons bearing the faces of their destined victims appear in the sky… An amateur film crew hires an extremely individualistic fashion model and faces a real bloody ending… An offering of nine fresh nightmares for the delectation of horror fans.",
      image: shiver,
      coverType: "HARDCOVER",
      publicationDate: "December 19, 2017",
      isbn: "ISBN-10: 1421596938",
      backgroundColor: "#8AC5D7"
    },
    book6: {
      title: "Frankenstein: Junji Ito Story Collection",
      description: "Junji Ito meets Mary Shelley! The master of horror manga bends all his skill into bringing the anguished and solitary monster—and the fouler beast who created him—to life with the brilliantly detailed chiaroscuro he is known for.",
      image: frankenstein,
      coverType: "HARDCOVER",
      publicationDate: "October 16, 2018",
      isbn: "ISBN-10: 1974703762",
      backgroundColor: "#AA8593"
    },
    book7: {
      title: "Smashed: Junji Ito Story Collection",
      description: "Try not to be noticed when you eat the secret nectar, otherwise you’ll get smashed… What horrific events happened to create the earthbound—people tied to a certain place for the rest of their short lives? Then, a strange haunted house comes to town, but no one expects it to lead to a real hell… Welcome to Junji Ito’s world, a world with no escape from endless nightmares.",
      image: Smashed,
      coverType: "HARDCOVER",
      publicationDate: "April 16, 2019",
      isbn: "ISBN-10: 1421598469",
      backgroundColor: "#F36A4B"
    },
    book8:{
      title: "No Longer Human",
      description: "Mine has been a life of much shame. I can't even guess myself what it must be to live the life of a human being. Plagued by a maddening anxiety, the terrible disconnect between his own concept of happiness and the joy of the rest of the world, Yozo Oba plays the clown in his dissolute life, holding up a mask for those around him as he spirals ever downward, locked arm-in-arm with death.",
      image: noLongerHuman,
      coverType: "HARDCOVER",
      publicationDate: "December 17, 2019",
      isbn: "ISBN-10: 1974707091",
      backgroundColor: "#EA836B"
    },
    book9:{
      title: "The Art of Junji Ito: Twisted Visions",
      description: "This first collection of Junji Ito's artwork features over 130 images from his best-selling manga titles as well as rare works. The collection includes all of Junji Ito's unforgettable illustrations in both black and white and color. Look forward to, among other things to experience the terrible beauty that characterizes the \"Tomie\" series as well as the inhuman spirals of the \"Uzumaki\" series.",
      image: twistedVisions,
      coverType: "HARDCOVER",
      publicationDate: "",
      isbn: "ISBN-10: 1974713008",
      backgroundColor: "#AC3476"
    },
    book10: {
      title: "Venus in the Blind Spot",
      description: "A \"best of\" collection of creepy tales from Eisner award winner and legendary horror master Junji Ito. This striking collection presents the most remarkable short works of Junji Ito's career, featuring an adaptation of Rampo Edogawa's classic horror story \"Human Chair\" and fan favorite \"The Enigma of Amigara Fault.\" With a deluxe presentation-including special color pages, and showcasing illustrations from his acclaimed long-form manga No Longer Human-each chilling tale invites readers to revel in a world of terror.",
      image: venusInTheBlindSpot,
      coverType: "HARDCOVER",
      publicationDate: "August 18, 2020",
      isbn: "ISBN-10: 1974715477",
      backgroundColor: "#51BAA9"
    },
    book11: {
      title: "Remina",
      description: "Remina is a sci-fi and horror manga masterpiece by Junji Ito about a terrifying hell star that threatens to destroy all life on Earth.",
      image: remina,
      coverType: "HARDCOVER",
      publicationDate: "",
      isbn: "ISBN-10: 197471747X",
      backgroundColor: "#EC412F"
    },
    book12: {
      title: "Lovesickness: Junji Ito Story Collection",
      description: "An innocent love becomes a bloody hell in another superb collection by master of horror Junji Ito. Ryusuke returns to the town he once lived in because rumors are swirling about girls killing themselves after encountering a bewitchingly handsome young man. Harboring his own secret from time spent in this town, Ryusuke attempts to capture the beautiful boy and close the case, but... Starting with the strikingly bloody \"Lovesickness,\" this volume collects ten stories showcasing horror master Junji Ito in peak form, including \"The Strange Hikizuri Siblings\" and \"The Rib Woman.\"",
      image: lovesickness,
      coverType: "HARDCOVER",
      publicationDate: "",
      isbn: "ISBN-10: 1974719847",
      backgroundColor: "#7FA791"
    },
    book13: {
      title: "Sensor",
      description: "Horror master Junji Ito explores a new frontier with a grand cosmic horror tale in which a mysterious woman has her way with the world! A woman walks alone at the foot of Mount Sengoku. A man appears, saying he's been waiting for her, and invites her to a nearby village. Surprisingly, the village is covered in hairlike volcanic glass fibers, and all of it shines a bright gold. At night, when the villagers perform their custom of gazing up at the starry sky, countless unidentified flying objects come raining down on them-the opening act for the terror about to occur!",
      image: sensor,
      coverType: "HARDCOVER",
      publicationDate: "",
      isbn: "ISBN-10: 1974718905",
      backgroundColor: "#976B48"
    },
    book14: {
      title: "Deserter: Junji Ito Story Collection",
      description: "An ever-increasing malice. A mind-numbing terror. The seeds of horror are sown in this collection of Junji Ito's earliest works. A vengeful family hides an army deserter for eight years after the end of World War II. His wronged wife waits to exact revenge. A girl cowers in fear as she hears footsteps climbing the stairs—a killer has arrived. A girl haunts the farmhouse where she committed suicide. The floating head of a young boy traumatizes the woman who only wanted to help him. This hauntingly strange story collection showcases a dozen of Junji Ito's earliest works from when he burst onto the horror scene, creating the wrenching disturbia that has captivated millions of fans worldwide.",
      image: deserter,
      coverType: "HARDCOVER",
      publicationDate: "",
      isbn: "ISBN-10: 1974720529",
      backgroundColor: "#453231"
    }
  
};

export default bookDetails;
