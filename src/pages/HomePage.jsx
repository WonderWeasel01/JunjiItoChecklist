import React, { useState } from 'react';
import '../css/HomePage.css'
import '../index.css'

import uzumaki from '../assets/bookCovers/uzumaki.png'
import gyo from '../assets/bookCovers/gyo.png'
import frankenstein from '../assets/bookCovers/frankenstein.png'
import fragments from '../assets/bookCovers/fragmentsOfHorror.png'
import tomie from '../assets/bookCovers/tomie.png'
import shiver from '../assets/bookCovers/shiver.png'
import Smashed from '../assets/bookCovers/smashed.png'
import noLongerHuman from '../assets/bookCovers/noLongerHuman.png'
import twistedVisions from '../assets/bookCovers/twistedVisions.png'
import venusInTheBlindSpot from '../assets/bookCovers/venusInTheBlindSpot.png'
import remina from '../assets/bookCovers/remina.png'
import lovesickness from '../assets/bookCovers/lovesickness.png'
import sensor from '../assets/bookCovers/sensor.png'
import deserter from '../assets/bookCovers/deserter.png'
import theliminalzone from '../assets/bookCovers/theLiminalZone.png'
import blackparadox from '../assets/bookCovers/blackParadox.png'
import tombs from '../assets/bookCovers/tombs.png'
import soichi from '../assets/bookCovers/soichi.png'
import betwixt from '../assets/bookCovers/betwixt.png'
import mimistalesofterror from '../assets/bookCovers/mimisTalesOfTerror.png'
import stitches from '../assets/bookCovers/stitches.png'
import uncanny from '../assets/bookCovers/uncanny.png'
import viz from '../assets/viz.png'
import kc from '../assets/kc.png'
import darkHorse from '../assets/darkHorse.png'
import comicsOne from '../assets/comicsOne.png'
import oldViz from '../assets/oldViz.png'





function HomePage() {

  const [visibleColumn, setVisibleColumn] = useState(null);


  return (
    <>
      <html>
        <body>
          
      <div className='header'>
        <h1>Junji Ito Checklist</h1>
      </div>


    
      <div className='logorow'>
        <img 
          src={viz} 
          alt="VIZ Media" 
          className='logo' 
          onClick={() => setVisibleColumn('viz')}
        />
        <img 
          src={kc} 
          alt="KC" 
          className='logo' 
          onClick={() => setVisibleColumn('kc')}
        />
          <img 
          src={comicsOne} 
          alt="Comisc One" 
          className='logo'
          onClick={() => setVisibleColumn('comiscOne')}
        />
        
        <img 
          src={darkHorse} 
          alt="Dark Horse" 
          className='logo'
          onClick={() => setVisibleColumn('darkHorse')}
        />
          <img 
          src={oldViz} 
          alt="Old VIZ Media" 
          className='logo'
          onClick={() => setVisibleColumn('oldViz')}
        />
      </div>

      {visibleColumn === 'viz' && (
        <div className='bookcolumn'>
            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Uzumaki</h1>
                  </div>
                  <div className='description'>
                  A curse hangs over the small, foggy Japanese coastal town of
                  Kurozu-cho. According to Kirie Goshima&apos;s withdrawn boyfriend
                  Shuichi Saito, the town is haunted not by a person or creature but
                  by the pattern uzumaki. A spiral and hypnotic secret form of the
                  world that manifests in everything. From seashells to maelstroms
                  in the sea and to the human body. As the anxiety spreads, the
                  inhabitants of Kurozu-cho are drawn deeper and deeper into the
                  endless maelstrom…
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={uzumaki} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#D0282F' }}>
                <div>UZUMAKI - 3-in-1 Deluxe Edition</div>
                <div>HARDCOVER</div>
                <div>October 15, 2013 - ISBN-10: 1421561328</div>
              </div>


            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Gyo</h1>
                  </div>
                  <div className='description'>
                  The floating smell of death hangs over the island. What is it? A strange, legged fish appears on the scene... So begins Tadashi and Kaori's spiral into the horror and stench of the sea. Here is the creepiest masterpiece of horror manga ever from the creator of Uzumaki, Junji Ito. Hold your breath until all is revealed. 
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={gyo} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#D0282F' }}>
                <div>Gyo - 2-in-1 Deluxe Edition</div>
                <div>HARDCOVER</div>
                <div>April 21, 2015 - ISBN-10: 1421579154</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Fragments of Horror</h1>
                  </div>
                  <div className='description'>
                  An old wooden mansion that turns on its inhabitants. A dissection class with a most unusual subject. A funeral where the dead are definitely not laid to rest. Ranging from the terrifying to the comedic, from the erotic to the loathsome, these stories showcase Junji Ito's long-awaited return to the world of horror.
                  </div>
                  </div>

                <div className='midsectionright'>
                  <img src={fragments} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#E54B23' }}>
                <div>Fragments of Horror</div>
                <div>HARDCOVER</div>
                <div>June 16, 2015 - ISBN-10: 1421580799</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Tomie</h1>
                  </div>
                  <div className='description'>
                  I “Tomie: Complete Deluxe Edition" møder vi Tomie Kawakami, der bliver dræbt gang på gang… og alligevel formår at vende tilbage. Hun er en sand femme fatale, der med sit smukke, sorte hår og skønhedsmærke under øjet formår at forføre alle de mænd, hun vil. Hun kan også få dem til at begå mord, også selvom Tomie selv er ofret. Mens den ene mand gerne vil have hende for sig selv, så er den anden skrækslagen for denne udødelige dæmonkvinde. Det går snart op for dem, at ligemeget hvor mange gange de dræber hende, så bliver verden aldrig fri for Tomie.
                  </div>
                  </div>

                <div className='midsectionright'>
                  <img src={tomie} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#D72531' }}>
                <div>Tomie: Complete Deluxe Edition</div>
                <div>HARDCOVER</div>
                <div>December 20, 2016 - ISBN-10: 1421590565</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Shiver</h1>
                  </div>
                  <div className='description'>
                  An arm peppered with tiny holes dangles from a sick girl’s window… After an idol hangs herself, balloons bearing the faces of their destined victims appear in the sky… An amateur film crew hires an extremely individualistic fashion model and faces a real bloody ending… An offering of nine fresh nightmares for the delectation of horror fans.
                  </div>
                  </div>

                <div className='midsectionright'>
                  <img src={shiver} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#8AC5D7' }}>
                <div>Shiver: Junji Ito Selected Stories
                </div>
                <div>HARDCOVER</div>
                <div>December 19, 2017 - ISBN-10: 1421596938</div>
              </div>

            </div>



            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Frankenstein</h1>
                  </div>
                  <div className='description'>
                  Junji Ito meets Mary Shelley! The master of horror manga bends all his skill into bringing the anguished and solitary monster—and the fouler beast who created him—to life with the brilliantly detailed chiaroscuro he is known for.
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={frankenstein} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#AA8593' }}>
                <div>Frankenstein: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>October 16, 2018 - ISBN-10: 1974703762</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Smashed</h1>
                  </div>
                  <div className='description'>
                  Try not to be noticed when you eat the secret nectar, otherwise you’ll get smashed… What horrific events happened to create the earthbound—people tied to a certain place for the rest of their short lives? Then, a strange haunted house comes to town, but no one expects it to lead to a real hell… Welcome to Junji Ito’s world, a world with no escape from endless nightmares.
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={Smashed} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#F36A4B' }}>
                <div>Smashed: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>April 16, 2019 - ISBN-10: 1421598469</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>No Longer Human</h1>
                  </div>
                  <div className='description'>
                  Mine has been a life of much shame. I can't even guess myself what it must be to live the life of a human being.

                  Plagued by a maddening anxiety, the terrible disconnect between his own concept of happiness and the joy of the rest of the world, Yozo Oba plays the clown in his dissolute life, holding up a mask for those around him as he spirals ever downward, locked arm-in-arm with death.
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={noLongerHuman} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#EA836B' }}>
                <div>No Longer Human</div>
                <div>HARDCOVER</div>
                <div>December 17, 2019 - ISBN-10: 1974707091</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Twisted Visions</h1>
                  </div>
                  <div className='description'>
                  This first collection of Junji Ito's artwork features over 130 images from his best-selling manga titles as well as rare works. The collection includes all of Junji Ito's unforgettable illustrations in both black and white and color. Look forward to, among other things to experience the terrible beauty that characterizes the "Tomie" series as well as the inhuman spirals of the "Uzumaki" series.
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={twistedVisions} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#AC3476' }}>
                <div>The Art of Junji Ito: Twisted Visions</div>
                <div>HARDCOVER</div>
                <div>ISBN-10: 1974713008 [Junji Ito Art Book]</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Venus in the Blind Spot</h1>
                  </div>
                  <div className='description'>
                  A "best of" collection of creepy tales from Eisner award winner and legendary horror master Junji Ito.This striking collection presents the most remarkable short works of Junji Ito's career, featuring an adaptation of Rampo Edogawa's classic horror story "Human Chair" and fan favorite "The Enigma of Amigara Fault." With a deluxe presentation-including special color pages, and showcasing illustrations from his acclaimed long-form manga No Longer Human-each chilling tale invites readers to revel in a world of terror.
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={venusInTheBlindSpot} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#51BAA9' }}>
                <div>Venus in the Blind Spot</div>
                <div>HARDCOVER</div>
                <div>August 18, 2020 - ISBN-10: 1974715477</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Remina</h1>
                  </div>
                  <div className='description'>
                  "Remina" is a sci-fi and horror manga masterpiece by Junji Ito about a terrifying hell star that threatens to destroy all life on Earth.
                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={remina} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#EC412F' }}>
                <div>Remina</div>
                <div>HARDCOVER</div>
                <div>ISBN-10: 197471747X</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Lovesickness</h1>
                  </div>
                  <div className='description'>
                  An innocent love becomes a bloody hell in another superb collection by master of horror Junji Ito.Ryusuke returns to the town he once lived in because rumors are swirling about girls killing themselves after encountering a bewitchingly handsome young man. Harboring his own secret from time spent in this town, Ryusuke attempts to capture the beautiful boy and close the case, but... Starting with the strikingly bloody "Lovesickness," this volume collects ten stories showcasing horror master Junji Ito in peak form, including "The Strange Hikizuri Siblings" and "The Rib Woman."                  </div>
                </div>

                <div className='midsectionright'>
                  <img src={lovesickness} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#7FA791' }}>
                <div>Lovesickness: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>ISBN-10: 1974719847</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Sensor</h1>
                  </div>
                  <div className='description'>
                  Horror master Junji Ito explores a new frontier with a grand cosmic horror tale in which a mysterious woman has her way with the world!A woman walks alone at the foot of Mount Sengoku. A man appears, saying he's been waiting for her, and invites her to a nearby village. Surprisingly, the village is covered in hairlike volcanic glass fibers, and all of it shines a bright gold. At night, when the villagers perform their custom of gazing up at the starry sky, countless unidentified flying objects come raining down on them-the opening act for the terror about to occur!
                </div>
                </div>

                <div className='midsectionright'>
                  <img src={sensor} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#976B48' }}>
                <div>Sensor</div>
                <div>HARDCOVER</div>
                <div>ISBN-10: 1974718905</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Deserter</h1>
                  </div>
                  <div className='description'>
                  An ever-increasing malice. A mind-numbing terror. The seeds of horror are sown in this collection of Junji Ito's earliest works.A vengeful family hides an army deserter for eight years after the end of World War II, cocooning him in a false reality where the war never ended. A pair of girls look alike, but they're not twins. And a boy's nightmare threatens to spill out into the real world... This hauntingly strange story collection showcases a dozen of Junji Ito's earliest works from when he burst onto the horror scene, sowing fresh seeds of terror.
                </div>
                </div>

                <div className='midsectionright'>
                  <img src={deserter} alt="image1220" className="coverimage"/>
                </div>

              </div>

              <div className='bottomrow' style={{ backgroundColor: '#CC6270' }}>
                <div>Deserter: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>December 21, 2021 - ISBN-10: 1974719863</div>
              </div>

            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>The Liminal Zone</h1>
                  </div>
                  <div className='description'>
                  What destiny awaits them after the screaming?After abruptly departing from a train in a small town, a couple encounters a "weeping woman"-a professional mourner-sobbing inconsolably at a funeral. Mako changes afterward-she can't stop crying! In another tale, having decided to die together, a couple enters Aokigahara, the infamous suicide forest. What is the shocking otherworldly torrent that they discover there?One of horror's greatest talents, Junji Ito beckons readers to join him in an experience of ultimate terror with four transcendently terrifying tales.
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={theliminalzone} alt="image1221" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#A6A1C3' }}>
                <div>The Liminal Zone</div>
                <div>HARDCOVER</div>
                <div>July 26, 2022 - ISBN-10: 1974726444</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Black Paradox</h1>
                  </div>
                  <div className='description'>
                  Four people intent on killing themselves meet through the suicide website Black Paradox: Maruso, a nurse who despairs about the future; Taburo, a man who is tortured by his doppelganger; Pii-tan, an engineer with his own robot clone; and Baracchi, a woman who agonizes about the birthmark on her face. They wander together in search of the perfect death, fatefully opening a door that leads them to a rather bizarre destiny...
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={blackparadox} alt="image1222" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#1E181F' }}>
                <div>Black Paradox</div>
                <div>HARDCOVER</div>
                <div>October 25, 2022 - ISBN-10: 1974728633</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Tombs</h1>
                  </div>
                  <div className='description'>
                  Countless tombstones stand in rows throughout a small community, forming a bizarre tableau. What fate awaits a brother and sister after a traffic accident in this town of the dead? In another tale, a girl falls silent, her tongue transformed into a slug. Can a friend save her? Then, when a young man moves to a new town, he finds the house next door has only a single window. What does his grotesque neighbor want, calling out to him every evening from that lone window?Fresh nightmares brought to you by horror master Junji Ito.
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={tombs} alt="image1223" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#B7D465' }}>
                <div>Tombs: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>March 28, 2023 - ISBN-10: 1974736040</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Soichi</h1>
                  </div>
                  <div className='description'>
                  Soichi, the unhinged second son of the Tsujii family, chews nails and makes them clatter and clack as he spouts horrific curses to bring about the most bizarre happenings. Whether it's summer holidays or a birthday party, Soichi can turn any occasion into a nightmare in a heartbeat. What is the terrible secret of his origin? Meanwhile, tormented by his little brother's never-ending pranks, older brother Koichi has a soundproof room built. But why does it have a series of four doors? And then there's the strange phenomenon surrounding the handmade casket their grandfather left behind. What on earth-or hell-has the family seen there?
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={soichi}alt="image1224" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#6658A1' }}>
                <div>Soichi: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>July 25, 2023 - ISBN-10: 1974739023</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Betwixt</h1>
                  </div>
                  <div className='description'>
                  Manga creators from Japan and the US present an international showcase of horror. Collected for the first time in Betwixt: A Horror Manga Anthology, six short stories reveal the universal fear of the space between the known and unknown. Will anyone cross that border?
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={betwixt} alt="image1225" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#7EB63F' }}>
                <div>Betwixt: A Horror Manga Anthology</div>
                <div>HARDCOVER</div>
                <div>October 10, 2023 - ISBN-10: 1974741451</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Mimi's Tales of Terror</h1>
                  </div>
                  <div className='description'>
                  University student Mimi and her boyfriend Naoto encounter one chilling mystery after another. There’s the enigmatic neighbor woman dressed in black from head to toe—but if she’s so odd, why does it seems like there are many others like her? Then, whose eyes track Mimi’s movements from the cemetery next door?  And why does a bizarre red circle drawn on a basement wall change with each passing day?
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={mimistalesofterror} alt="image1226" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#BB2C1C' }}>
                <div>Mimi's Tales of Terror</div>
                <div>HARDCOVER</div>
                <div>October 24, 2023 - ISBN-10: 1974738515</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Stitches</h1>
                  </div>
                  <div className='description'>
                  A tumor shaped like a man’s face slowly moves across a woman’s body. The sea shoots glowing balls into the sky, much to the distress of beachgoers. And a girl dressed up for a holiday has no eyes, no nose, nothing—her face is a total blank.
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={stitches} alt="image1227" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#C10015' }}>
                <div>Stitches by Hirokatsu Kihara, Illustrations by Junji Ito</div>
                <div>HARDCOVER</div>
                <div>March 26, 2024 - ISBN-10: 1974736563</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Alley</h1>
                  </div>
                  <div className='description'>
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src="alley" alt="image1228" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#CC6270' }}>
                <div>Alley: Junji Ito Story Collection</div>
                <div>HARDCOVER</div>
                <div>July 23, 2024 - ISBN-10: 1974736032</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>Uncanny</h1>
                  </div>
                  <div className='description'>
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src={uncanny} alt="image1229" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#CC6270' }}>
                <div>Uncanny: The Origins of Fear</div>
                <div>HARDCOVER</div>
                <div>October 15, 2024 - ISBN-10: 1974747301</div>
              </div>
            </div>

            <div className="bookcard">
              <div className='row'>
                <div className='midsectionleft'>
                  <div>
                    <h1>The Liminal Zone, Vol. 2</h1>
                  </div>
                  <div className='description'>
                  What fate awaits when death is not the end?
                  A group of four university students stumbles upon a deserted, decaying village deep in the mountains only to find an enormous perpetual motion machine still at work there. Before they can answer the questions of who made it and to what end, the friends begin to disappear, one after the other. Another story sees the return of the strange Hikizuri siblings! A girl weighed down since birth by an invisible burden meets the odd siblings and moves in with them in order to understand the truth about herself. But after a string of bizarre occurrences, the siblings’ uncle appears on the scene… 
                  </div>
                </div>
                <div className='midsectionright'>
                  <img src="theliminalzonevol2" alt="image1230" className="coverimage"/>
                </div>
              </div>
              <div className='bottomrow' style={{ backgroundColor: '#CC6270' }}>
                <div>The Liminal Zone, Vol. 2</div>
                <div>HARDCOVER</div>
                <div>Spring 2025</div>
              </div>
            </div>
          
        </div>
      )}

      {visibleColumn === 'kc' && (
        <div className='bookcolumn'>
          
        </div>
      )}

      {visibleColumn === 'darkHorse' && (
        <div className='bookcolumn'>
         
        </div>
      )}

      
      {visibleColumn === 'comicsOne' && (
        <div className='bookcolumn'>

        </div>
      )}

      {visibleColumn === 'oldViz' && (
        <div className='bookcolumn'>
          
        </div>
      )}




          



        </body>
      </html>

    </>
  )
}

export default HomePage
