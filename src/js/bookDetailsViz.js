// bookDetails.js

import uzumaki from '../assets/bookCoversViz/uzumaki.png';
import gyo from '../assets/bookCoversViz/gyo.png';
import fragments from '../assets/bookCoversViz/fragmentsOfHorror.png';
import tomie from '../assets/bookCoversViz/tomie.png';
import shiver from '../assets/bookCoversViz/shiver.png';
import frankenstein from '../assets/bookCoversViz/frankenstein.png';
import Smashed from '../assets/bookCoversViz/smashed.png';
import noLongerHuman from '../assets/bookCoversViz/noLongerHuman.png';
import twistedVisions from '../assets/bookCoversViz/twistedVisions.png';
import venusInTheBlindSpot from '../assets/bookCoversViz/venusInTheBlindSpot.png';
import remina from '../assets/bookCoversViz/remina.png';
import lovesickness from '../assets/bookCoversViz/lovesickness.png';
import sensor from '../assets/bookCoversViz/sensor.png';
import deserter from '../assets/bookCoversViz/deserter.png';
import theliminalzone from '../assets/bookCoversViz/theLiminalZone.png';
import blackparadox from '../assets/bookCoversViz/blackParadox.png';
import tombs from '../assets/bookCoversViz/tombs.png';
import soichi from '../assets/bookCoversViz/soichi.png';
import betwixt from '../assets/bookCoversViz/betwixt.png';
import mimistalesofterror from '../assets/bookCoversViz/mimisTalesOfTerror.png';
import stitches from '../assets/bookCoversViz/stitches.png';
import alley from '../assets/bookCoversViz/alley.jpeg';
import theLiminalZoneVolume2 from '../assets/bookCoversViz/theLiminalZoneVolume2.jpg';
import uncanny from '../assets/bookCoversViz/uncanny.png';




// import other images similarly...

const bookDetailsViz = {
  book1: {
    title: 'Uzumaki',
    description: `A curse hangs over the small, foggy Japanese coastal town of Kurozu-cho. According to Kirie Goshima's withdrawn boyfriend Shuichi Saito, the town is haunted not by a person or creature but by the pattern uzumaki. A spiral and hypnotic secret form of the world that manifests in everything. From seashells to maelstroms in the sea and to the human body. As the anxiety spreads, the inhabitants of Kurozu-cho are drawn deeper and deeper into the endless maelstrom…`,
    format: 'HARDCOVER',
    publicationDate: 'October 15, 2013',
    isbn: 'ISBN-10: 1421561328',
    image: uzumaki,
    color: '#D0282F',
  },
    book2: {
      title: "Gyo",
      description: "The floating smell of death hangs over the island. What is it? A strange, legged fish appears on the scene... So begins Tadashi and Kaori's spiral into the horror and stench of the sea. Here is the creepiest masterpiece of horror manga ever from the creator of Uzumaki, Junji Ito. Hold your breath until all is revealed.",
      image: gyo,
      format: "HARDCOVER",
      publicationDate: "April 21, 2015",
      isbn: "ISBN-10: 1421579154",
      color: "#D0282F"
    },
    book3: {
      title: "Fragments of Horror",
      description: "An old wooden mansion that turns on its inhabitants. A dissection class with a most unusual subject. A funeral where the dead are definitely not laid to rest. Ranging from the terrifying to the comedic, from the erotic to the loathsome, these stories showcase Junji Ito's long-awaited return to the world of horror.",
      image: fragments,
      format: "HARDCOVER",
      publicationDate: "June 16, 2015",
      isbn: "ISBN-10: 1421580799",
      color: "#E54B23"
    },
    book4: {
      title: "Tomie: Complete Deluxe Edition",
      description: "I “Tomie: Complete Deluxe Edition\" møder vi Tomie Kawakami, der bliver dræbt gang på gang… og alligevel formår at vende tilbage. Hun er en sand femme fatale, der med sit smukke, sorte hår og skønhedsmærke under øjet formår at forføre alle de mænd, hun vil. Hun kan også få dem til at begå mord, også selvom Tomie selv er ofret. Mens den ene mand gerne vil have hende for sig selv, så er den anden skrækslagen for denne udødelige dæmonkvinde. Det går snart op for dem, at ligemeget hvor mange gange de dræber hende, så bliver verden aldrig fri for Tomie.",
      image: tomie,
      format: "HARDCOVER",
      publicationDate: "December 20, 2016",
      isbn: "ISBN-10: 1421590565",
      color: "#D72531"
    },
    book5: {
      title: "Shiver: Junji Ito Selected Stories",
      description: "An arm peppered with tiny holes dangles from a sick girl’s window… After an idol hangs herself, balloons bearing the faces of their destined victims appear in the sky… An amateur film crew hires an extremely individualistic fashion model and faces a real bloody ending… An offering of nine fresh nightmares for the delectation of horror fans.",
      image: shiver,
      format: "HARDCOVER",
      publicationDate: "December 19, 2017",
      isbn: "ISBN-10: 1421596938",
      color: "#8AC5D7"
    },
    book6: {
      title: "Frankenstein: Junji Ito Story Collection",
      description: "Junji Ito meets Mary Shelley! The master of horror manga bends all his skill into bringing the anguished and solitary monster—and the fouler beast who created him—to life with the brilliantly detailed chiaroscuro he is known for.",
      image: frankenstein,
      format: "HARDCOVER",
      publicationDate: "October 16, 2018",
      isbn: "ISBN-10: 1974703762",
      color: "#AA8593"
    },
    book7: {
      title: "Smashed: Junji Ito Story Collection",
      description: "Try not to be noticed when you eat the secret nectar, otherwise you’ll get smashed… What horrific events happened to create the earthbound—people tied to a certain place for the rest of their short lives? Then, a strange haunted house comes to town, but no one expects it to lead to a real hell… Welcome to Junji Ito’s world, a world with no escape from endless nightmares.",
      image: Smashed,
      format: "HARDCOVER",
      publicationDate: "April 16, 2019",
      isbn: "ISBN-10: 1421598469",
      color: "#F36A4B"
    },
    book8:{
      title: "No Longer Human",
      description: "Mine has been a life of much shame. I can't even guess myself what it must be to live the life of a human being. Plagued by a maddening anxiety, the terrible disconnect between his own concept of happiness and the joy of the rest of the world, Yozo Oba plays the clown in his dissolute life, holding up a mask for those around him as he spirals ever downward, locked arm-in-arm with death.",
      image: noLongerHuman,
      format: "HARDCOVER",
      publicationDate: "December 17, 2019",
      isbn: "ISBN-10: 1974707091",
      color: "#EA836B"
    },
    book9:{
      title: "The Art of Junji Ito: Twisted Visions",
      description: "This first collection of Junji Ito's artwork features over 130 images from his best-selling manga titles as well as rare works. The collection includes all of Junji Ito's unforgettable illustrations in both black and white and color. Look forward to, among other things to experience the terrible beauty that characterizes the \"Tomie\" series as well as the inhuman spirals of the \"Uzumaki\" series.",
      image: twistedVisions,
      format: "HARDCOVER",
      publicationDate: "April 21, 2020",
      isbn: "ISBN-10: 1974713008",
      color: "#AC3476"
    },
    book10: {
      title: "Venus in the Blind Spot",
      description: "A \"best of\" collection of creepy tales from Eisner award winner and legendary horror master Junji Ito. This striking collection presents the most remarkable short works of Junji Ito's career, featuring an adaptation of Rampo Edogawa's classic horror story \"Human Chair\" and fan favorite \"The Enigma of Amigara Fault.\" With a deluxe presentation-including special color pages, and showcasing illustrations from his acclaimed long-form manga No Longer Human-each chilling tale invites readers to revel in a world of terror.",
      image: venusInTheBlindSpot,
      format: "HARDCOVER",
      publicationDate: "August 18, 2020",
      isbn: "ISBN-10: 1974715477",
      color: "#51BAA9"
    },
    book11: {
      title: "Remina",
      description: "Remina is a sci-fi and horror manga masterpiece by Junji Ito about a terrifying hell star that threatens to destroy all life on Earth.",
      image: remina,
      format: "HARDCOVER",
      publicationDate: "December 15, 2020",
      isbn: "ISBN-10: 197471747X",
      color: "#EC412F"
    },
    book12: {
      title: "Lovesickness: Junji Ito Story Collection",
      description: "An innocent love becomes a bloody hell in another superb collection by master of horror Junji Ito. Ryusuke returns to the town he once lived in because rumors are swirling about girls killing themselves after encountering a bewitchingly handsome young man. Harboring his own secret from time spent in this town, Ryusuke attempts to capture the beautiful boy and close the case, but... Starting with the strikingly bloody \"Lovesickness,\" this volume collects ten stories showcasing horror master Junji Ito in peak form, including \"The Strange Hikizuri Siblings\" and \"The Rib Woman.\"",
      image: lovesickness,
      format: "HARDCOVER",
      publicationDate: "April 20, 2021",
      isbn: "ISBN-10: 1974719847",
      color: "#7FA791"
    },
    book13: {
      title: "Sensor",
      description: "Horror master Junji Ito explores a new frontier with a grand cosmic horror tale in which a mysterious woman has her way with the world! A woman walks alone at the foot of Mount Sengoku. A man appears, saying he's been waiting for her, and invites her to a nearby village. Surprisingly, the village is covered in hairlike volcanic glass fibers, and all of it shines a bright gold. At night, when the villagers perform their custom of gazing up at the starry sky, countless unidentified flying objects come raining down on them-the opening act for the terror about to occur!",
      image: sensor,
      format: "HARDCOVER",
      publicationDate: "August 17, 2021",
      isbn: "ISBN-10: 1974718905",
      color: "#976B48"
    },
    book14: {
      title: "Deserter: Junji Ito Story Collection",
      description: "An ever-increasing malice. A mind-numbing terror. The seeds of horror are sown in this collection of Junji Ito's earliest works.A vengeful family hides an army deserter for eight years after the end of World War II, cocooning him in a false reality where the war never ended. A pair of girls look alike, but they're not twins. And a boy's nightmare threatens to spill out into the real world... This hauntingly strange story collection showcases a dozen of Junji Ito's earliest works from when he burst onto the horror scene, sowing fresh seeds of terror.",
      image: deserter,
      format: "HARDCOVER",
      publicationDate: "December 21, 2021",
      isbn: "ISBN-10: 1974719863",
      color: "#CC6270"
    },
    
    book15: {
      title: "The Liminal Zone",
      description: "What destiny awaits them after the screaming?After abruptly departing from a train in a small town, a couple encounters a \"weeping woman\"-a professional mourner-sobbing inconsolably at a funeral. Mako changes afterward-she can't stop crying! In another tale, having decided to die together, a couple enters Aokigahara, the infamous suicide forest. What is the shocking otherworldly torrent that they discover there?One of horror's greatest talents, Junji Ito beckons readers to join him in an experience of ultimate terror with four transcendently terrifying tales.",
      image: theliminalzone,
      format: "HARDCOVER",
      publicationDate: "July 26, 2022",
      isbn: "ISBN-10: 1974726444",
      color: "#A6A1C3"
    },
    
    book16: {
      title: "Black Paradox",
      description: "Four people intent on killing themselves meet through the suicide website Black Paradox: Maruso, a nurse who despairs about the future; Taburo, a man who is tortured by his doppelganger; Pii-tan, an engineer with his own robot clone; and Baracchi, a woman who agonizes about the birthmark on her face. They wander together in search of the perfect death, fatefully opening a door that leads them to a rather bizarre destiny...",
      image: blackparadox,
      format: "HARDCOVER",
      publicationDate: "October 25, 2022",
      isbn: "ISBN-10: 1974728633",
      color: "#1E181F"
    },
    
    book17: {
      title: "Tombs: Junji Ito Story Collection",
      description: "Countless tombstones stand in rows throughout a small community, forming a bizarre tableau. What fate awaits a brother and sister after a traffic accident in this town of the dead? In another tale, a girl falls silent, her tongue transformed into a slug. Can a friend save her? Then, when a young man moves to a new town, he finds the house next door has only a single window. What does his grotesque neighbor want, calling out to him every evening from that lone window?Fresh nightmares brought to you by horror master Junji Ito.",
      image: tombs,
      format: "HARDCOVER",
      publicationDate: "March 28, 2023",
      isbn: "ISBN-10: 1974736040",
      color: "#B7D465"
    },
    
    book18: {
      title: "Soichi: Junji Ito Story Collection",
      description: "Soichi, the unhinged second son of the Tsujii family, chews nails and makes them clatter and clack as he spouts horrific curses to bring about the most bizarre happenings. Whether it's summer holidays or a birthday party, Soichi can turn any occasion into a nightmare in a heartbeat. What is the terrible secret of his origin? Meanwhile, tormented by his little brother's never-ending pranks, older brother Koichi has a soundproof room built. But why does it have a series of four doors? And then there's the strange phenomenon surrounding the handmade casket their grandfather left behind. What on earth-or hell-has the family seen there?",
      image: soichi,
      format: "HARDCOVER",
      publicationDate: "July 25, 2023",
      isbn: "ISBN-10: 1974739023",
      color: "#6658A1"
    },
    
    book19: {
      title: "Betwixt: A Horror Manga Anthology",
      description: "Manga creators from Japan and the US present an international showcase of horror. Collected for the first time in Betwixt: A Horror Manga Anthology, six short stories reveal the universal fear of the space between the known and unknown. Will anyone cross that border?",
      image: betwixt,
      format: "HARDCOVER",
      publicationDate: "October 10, 2023",
      isbn: "ISBN-10: 1974741451",
      color: "#7EB63F"
    },
    
    book20: {
      title: "Mimi's Tales of Terror",
      description: "University student Mimi and her boyfriend Naoto encounter one chilling mystery after another. There’s the enigmatic neighbor woman dressed in black from head to toe—but if she’s so odd, why does it seems like there are many others like her? Then, whose eyes track Mimi’s movements from the cemetery next door?  And why does a bizarre red circle drawn on a basement wall change with each passing day?",
      image: mimistalesofterror,
      format: "HARDCOVER",
      publicationDate: "October 24, 2023",
      isbn: "ISBN-10: 1974738515",
      color: "#BB2C1C"
    },
    
    book21: {
      title: "Stitches by Hirokatsu Kihara, Illustrations by Junji Ito",
      description: "A tumor shaped like a man’s face slowly moves across a woman’s body. The sea shoots glowing balls into the sky, much to the distress of beachgoers. And a girl dressed up for a holiday has no eyes, no nose, nothing—her face is a total blank.",
      image: stitches,
      format: "HARDCOVER",
      publicationDate: "March 26, 2024",
      isbn: "ISBN-10: 1974736563",
      color: "#C10015"
    },
    
    book22: {
      title: "Alley: Junji Ito Story Collection",
      description: "",
      image: alley,
      format: "HARDCOVER",
      publicationDate: "July 23, 2024",
      isbn: "ISBN-10: 1974736032",
      color: "#CC6270"
    },
    
    book23: {
      title: "Uncanny: The Origins of Fear",
      description: "",
      image: uncanny,
      format: "HARDCOVER",
      publicationDate: "October 15, 2024",
      isbn: "ISBN-10: 1974747301",
      color: "#CC6270"
    },
    
    book24: {
      title: "The Liminal Zone, Vol. 2",
      description: "What fate awaits when death is not the end? A group of four university students stumbles upon a deserted, decaying village deep in the mountains only to find an enormous perpetual motion machine still at work there. Before they can answer the questions of who made it and to what end, the friends begin to disappear, one after the other. Another story sees the return of the strange Hikizuri siblings! A girl weighed down since birth by an invisible burden meets the odd siblings and moves in with them in order to understand the truth about herself. But after a string of bizarre occurrences, the siblings’ uncle appears on the scene…",
      image: theLiminalZoneVolume2,
      format: "HARDCOVER",
      publicationDate: "Spring 2025",
      isbn: "",
      color: "#CC6270"
    }
    

  
};

export default bookDetailsViz;
