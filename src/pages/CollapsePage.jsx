import { useState } from 'react';
import Collapse from '../components/collapse/Collapse';
import './collapsePage.scss';

const CollapsePage = () => {
  const [open, setOpen] = useState(false);

  const handleMe = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="collapsePage">
      <h1> Collapse </h1>

      <div className="items">
        {[...Array(5).keys()].map(() => {
          return (
            <div className="item">
              <button onClick={handleMe}>open</button>
              <button onClick={handleMe}>close</button>

              <h1>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio voluptatum maxime id modi placeat sed, commodi soluta
                facere temporibus ullam.{' '}
              </h1>
              <Collapse isOpen={open}>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  a soluta, voluptates eos corporis aut quis ipsum possimus quos
                  sed illo reprehenderit dignissimos, at suscipit ab voluptas,
                  aliquam accusantium. Debitis! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Optio beatae voluptatem facilis
                  harum atque ratione soluta, laudantium molestias temporibus
                  vitae eos earum voluptas at id ea ut dolore ipsam corporis
                  porro ipsum veritatis, dolorum nesciunt! Beatae magnam
                  voluptas incidunt explicabo, ex ea. Maxime asperiores impedit,
                  soluta natus necessitatibus autem deleniti voluptatum ipsum
                  veniam, dolores beatae. Ipsum exercitationem cupiditate quo
                  laboriosam amet, quia quibusdam odit ea sunt dolor at omnis
                  voluptas, deserunt hic, nam explicabo laudantium porro tempore
                  veritatis. Ullam eum, dignissimos nam magnam earum, corrupti
                  neque labore iure impedit nemo assumenda vero rem iusto!
                  Cupiditate, aliquam eveniet veniam modi molestias fuga eos ab
                  sapiente, esse nam, ea et. Tempora esse eveniet, iusto cumque
                  animi perferendis eos ea, pariatur soluta est laboriosam error
                  dicta dolores! Autem explicabo maxime quia sit ex consequatur
                  nam! Repudiandae, commodi sit veniam dolorum atque animi
                  veritatis praesentium illum. Quidem sit aspernatur molestias
                  perspiciatis eos nam, commodi, veniam delectus ab harum alias
                  ullam voluptates? Laboriosam totam molestiae, cum porro
                  incidunt tempore! Dolor consequuntur quasi veniam esse omnis,
                  eius tempora error amet voluptates? In ipsam distinctio
                  quaerat debitis laboriosam facilis deleniti adipisci dolor
                  explicabo qui! Voluptate ad voluptatem laborum facilis
                  accusantium reiciendis consequatur expedita ab adipisci
                  nesciunt molestiae autem voluptatum, labore veniam, placeat
                  nobis distinctio incidunt repellendus tenetur eius, quam
                  omnis. Odit molestiae, accusamus a nobis impedit libero
                  reiciendis fugiat iusto quis numquam provident doloremque
                  consequatur ipsum asperiores consectetur. Ea, incidunt at!
                  Iste ratione qui voluptates iusto! Iusto, beatae consequuntur
                  vel suscipit et itaque? Nemo maxime corrupti ea quia pariatur!
                  Deleniti numquam incidunt, doloribus eaque expedita ad cum
                  nesciunt? Rerum quis, qui nemo esse pariatur dolorem
                  distinctio! Reprehenderit, necessitatibus rem dolore rerum
                  odio aliquam consequuntur sint illum accusamus! Sequi, quia?
                  Illo voluptatibus vel cumque provident eum reprehenderit sequi
                  eos repudiandae sit cupiditate eaque adipisci, quo, delectus
                  impedit nam nemo sunt. Itaque tenetur commodi dicta atque
                  sapiente, aliquid architecto quos laboriosam esse accusamus
                  ut? Id, deleniti similique! Iste, consequuntur? Veniam, nisi!
                  Ipsam minima iste beatae perspiciatis. Mollitia minus
                  blanditiis earum nisi molestiae porro incidunt praesentium quo
                  perspiciatis impedit. Sapiente assumenda, ex officia voluptas
                  odio voluptatem obcaecati. Aspernatur natus ad molestias
                  voluptatem esse suscipit quidem aperiam, quia sit omnis
                  corrupti laudantium, impedit maxime tenetur dicta eum ex in?
                  Quasi veritatis quo sunt consequatur consequuntur dolor neque
                  quod omnis, rerum nihil fugit facere! Nam numquam omnis libero
                  nostrum esse ex quos pariatur culpa, iusto fuga animi tempore
                  nisi, repudiandae accusamus impedit ipsam! Totam, consectetur
                  a libero nobis, saepe porro sequi corrupti dicta aut numquam
                  ut veritatis iste rerum eius quam neque quas hic, in nihil?
                  Iusto ex inventore maxime adipisci esse quos! Quam dolorem
                  odio, atque asperiores vero deleniti. Optio expedita, aliquid
                  provident rerum atque beatae repellat ullam officiis
                  repudiandae excepturi consequuntur maiores ipsum assumenda,
                  rem eos minus quod veritatis id, pariatur quae commodi
                  doloribus in voluptatibus. Rerum saepe, illum assumenda quos
                  perspiciatis, modi quo impedit doloremque, eum quibusdam nemo
                  laudantium labore animi soluta praesentium minima repellendus
                  repudiandae! Quos perferendis molestias officia sint
                  consequuntur cum inventore aliquam, impedit rerum, illum
                  obcaecati accusantium repellendus illo qui aperiam. Ullam
                  molestias, repudiandae necessitatibus asperiores eos saepe,
                  blanditiis ea eligendi, id aliquam libero exercitationem eum
                  maxime autem nobis aspernatur quis ipsam fugiat accusantium
                  iste maiores ipsum animi! Itaque obcaecati quidem voluptates
                  cupiditate quo fugiat, ut quod laboriosam ea optio dolores
                  consequatur nihil facere omnis eveniet ipsa esse nesciunt
                  vitae quia quas commodi minus quibusdam modi. Eius pariatur
                  nobis, odit, tempore itaque deleniti ex modi magnam,
                  perspiciatis minus non laudantium soluta vero ut facere quasi
                  enim? Soluta eos voluptas minima dolores, praesentium
                  perferendis perspiciatis aut delectus odit fugit veniam
                  provident necessitatibus? Quas cum optio corrupti, quo
                  laboriosam ad repudiandae odit perspiciatis tempora libero
                  eaque voluptate qui deleniti minima rerum doloribus quasi at
                  ratione consectetur. Laboriosam corrupti architecto a magni
                  accusamus sunt vel. Delectus hic, itaque, nemo eius quod eos
                  voluptatum quis, in accusantium eaque architecto tempore quasi
                  ratione. Quaerat perspiciatis accusantium totam rem eos quis
                  dignissimos nesciunt optio nulla esse. Aspernatur aliquam
                  suscipit, sint itaque eligendi vero sunt necessitatibus culpa
                  assumenda quae voluptas animi consequuntur quibusdam
                  perferendis iusto placeat omnis dolore minus labore quaerat
                  perspiciatis quisquam commodi expedita. Quibusdam recusandae
                  delectus, perspiciatis quaerat neque, debitis perferendis,
                  dignissimos ut eaque autem deserunt iste. Inventore quos
                  facere quibusdam consequuntur amet neque, odio itaque esse
                  consequatur autem facilis aut nemo! Cupiditate in iusto
                  adipisci illo accusantium? Vel repellendus ex saepe hic
                  maiores pariatur dolorum consequuntur distinctio aut, eveniet
                  fugit unde praesentium optio dolor totam eaque, magni quaerat
                  modi corporis provident sed illo? Pariatur laudantium rerum
                  perspiciatis facilis libero quibusdam ducimus officiis?
                  Exercitationem iusto autem vel accusamus nemo aut et dolor
                  ipsa cumque dolorum a possimus assumenda aliquid reiciendis
                  quos commodi quae, tempore corrupti. Sunt possimus aliquid
                  modi animi debitis nam porro ex quos nisi quia officia sequi
                  assumenda dignissimos asperiores similique illum praesentium,
                  repudiandae non ullam veniam. Hic, optio! Est error neque
                  saepe vel accusantium ratione assumenda inventore quis dolores
                  molestiae excepturi facere doloribus sed tempora nostrum eius
                  recusandae veniam maxime pariatur, voluptatum esse? Ipsum
                  praesentium optio commodi recusandae dolores quisquam
                  perferendis neque et omnis ullam! Nisi possimus provident
                  nostrum doloribus exercitationem minus repellat, alias culpa
                  recusandae vel aliquam eaque. Quod rerum maxime delectus
                  corporis repellat consequuntur earum velit aut animi
                  inventore, ipsum quae maiores. Sunt possimus doloremque, eius
                  aspernatur, molestiae ducimus pariatur, excepturi illo quos
                  autem officiis mollitia ut sit. Aliquam at totam porro
                  reprehenderit obcaecati excepturi autem! Eaque et dignissimos
                  praesentium iure. Ipsa eos at odio et saepe adipisci maxime
                  impedit hic quam natus, molestias nisi recusandae quaerat quo
                  dicta eius iure minima autem illum perspiciatis voluptate est
                  nam, molestiae illo? Ut veniam aperiam magni, eius eum
                  exercitationem porro. Cupiditate quasi eligendi nostrum
                  pariatur quos modi. Dicta hic libero molestias laboriosam
                  repellendus nisi, tempore veniam expedita temporibus,
                  voluptate reprehenderit amet similique vero, quidem suscipit.
                  Delectus provident neque esse fugit quod. Nihil commodi
                  corporis minima! Neque itaque optio fugiat aliquam! Cum
                  laudantium accusamus vitae esse non! Perspiciatis, omnis eius
                  doloribus enim porro praesentium neque consequatur excepturi
                  sint laborum, dolore sit ratione unde officiis ad incidunt,
                  dolor harum delectus!
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CollapsePage;
