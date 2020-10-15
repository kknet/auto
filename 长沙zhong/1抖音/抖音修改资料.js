var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
if (!requestScreenCapture()) {
    toastLog("请求截图权限失败！");
    exit();
}
var nc = ['Allen', 'Ava', 'Andy', 'Armstrong', 'Arnold', 'Anthony', 'Amos', 'Andrew', 'Archer', 'Augustine', 'Abbott', 'Abel', 'Abraham', 'Adair', 'Aldrich', 'Angel', 'Abernathy', 'Abrams', 'Acker', 'Ackerman', 'Adamson', 'Adcock', 'Adler', 'Alonso', 'Ali', 'Alonzo', 'Abra', 'Angle', 'Alger', 'Archibald', 'Armand', 'August', 'Abner', 'Adrian', 'Ahern', 'Alfred', 'Amy', 'Abbey', 'Abell', 'Abercrombie', 'Abernethy', 'Able', 'Abrahams', 'Abrahamson', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Abram', 'Abramson', 'Acheson', 'Acton', 'Acuff', 'Addington', 'Addy', 'Alfonso', 'Allan', 'Alton', 'Annabelle', 'Algernon', 'Alva', 'Alvin', 'Alvis', 'Andre', 'Angelo', 'Augus', 'Ansel', 'Antony', 'Antoine', 'Antonio', 'Aries', 'Arlen', 'Arno', 'Arvin', 'Asa', 'Ashbur', 'Atwood', 'Aaron', 'Adam', 'Adolph', 'Adonis', 'Alan', 'Abigail', 'Angela', 'Anna', 'Amanda', 'Ann', 'Alice', 'Andrea', 'Anne', 'Annie', 'Anita', 'Amber', 'April', 'Audrey', 'Annette', 'Ana', 'Alma', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Aloysius', 'Alpha', 'Alphonse', 'Alphonso', 'Alvah', 'Alvaro', 'Alvie', 'Alxis', 'Amadeo', 'Amado', 'Amador', 'Amario', 'Amarlai', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ambrose', 'Americo', 'Amiel', 'Amil', 'Amit', 'Anakin', 'Anatoly', 'Anderson', 'Andra', 'Andreas', 'Andrey', 'Andrus', 'Anfernee', 'Angus', 'Anh', 'Anibal', 'Anirudh', 'Ankoma', 'Anselmo', 'Anson', 'Antonino', 'Antwan', 'Antwon', 'Anup', 'Anwar', 'Api', 'Apostolos', 'Aqib', 'Aramys', 'Arash', 'Arcadio', 'Archie', 'Archil', 'Aric', 'Arjun', 'Arkadiy', 'Arlan', 'Arley', 'Arlie', 'Arlis', 'Arlo', 'Armando', 'Armani', 'Armon', 'Armond', 'Arnab', 'Arnaldo', 'Arnie', 'Arnoldo', 'Arnulfo', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aron', 'Arron', 'Arsal', 'Arshad', 'Arther', 'Artie', 'Artis', 'Artur', 'Arturo', 'Arvel', 'Arvid', 'Arwin', 'Asbert', 'Aseem', 'Ashantio', 'Asher', 'Ashfaq', 'Ashton', 'Atlee', 'Atrayu', 'Atwoun', 'Audie', 'Augustus', 'Aurelio', 'Austen', 'Austin', 'Austyn', 'Avi', 'Avinav', 'Avram', 'Axel', 'Aydan', 'Ayden', 'Ayinde', 'Aylwin', 'Ayodeji', 'Ayrat', 'Ayrton', 'Abbyabbie', 'Ailsa', 'Aviva', 'Amei', 'Ahy', 'Ailing', 'Amarie', 'Ameiya', 'Aadilah', 'Aafke', 'Aaralyn', 'Aashka', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aastha', 'Abida', 'Adalyn', 'Adrianous', 'Aicha', 'Ailema', 'Aislinn', 'Aleasha', 'Alegria', 'Aleigha', 'Alethea', 'Alexiz', 'Alley', 'Alwyn', 'Amada', 'Amalie', 'Amberis', 'Anyea', 'Anadeli', 'Anaiah', 'Andee', 'Angeles', 'Angelika', 'Anneke', 'Annemarieke', 'Annemiek', 'Angelice', 'Annu', 'Aoife', 'Aoki', 'Arcelia', 'Areena', 'Ashaya', 'Ashunta', 'Aspasia', 'Assis', 'Asten', 'Audrea', 'Augustina', 'Avangaline', 'Aynur', 'Azia', 'Annzley', 'Aunjenae', 'Abeiku', 'Adin', 'Afonso', 'Afraz', 'Aidon', 'Ainsof', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Alejo', 'Alliance', 'Amadeus', 'Amine', 'Amr', 'Anastasios', 'Andijamo', 'Angoni', 'Antti', 'Arif', 'Artem', 'Asad', 'Ashwath', 'Aslan', 'Atik', 'Attah', 'Altair', 'Arnon', 'Adora', 'Aeola', 'Alleen', 'Althena', 'Amethyst', 'Albreto', 'Acher', 'Apona', 'Ardelle', 'Aura', 'Amity', 'Amon', 'Aristotle', 'Alesa', 'Alika', 'Alita', 'Akio', 'Alister', 'Almena', 'Annora', 'Alexandor', 'Aloha', 'Amina', 'Atman', 'Akako', 'Arnia', 'Arnice', 'Asisa', 'Aramis', 'Ayoka', 'Arabela', 'Atalanta', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aletheia', 'Alethia', 'Alien', 'Amigo', 'Anglie', 'Apple', 'Auguste', 'Aabagael', 'Aachbo', 'Aadam', 'Aadan', 'Aadesh', 'Aahna', 'Aailyaa', 'Aanisah', 'AdaLynn', 'Adonia', 'Ariel', 'Aba', 'Abina', 'Adalia', 'Ailis', 'Akili', 'Alanni', 'Aure ', 'Azura', 'Andres', 'Al', 'Amelie', 'Autumn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bennett', 'Bishop', 'Bradley', 'Baker', 'Bryant', 'Bryson', 'Baird', 'Baldwin', 'Barnett', 'Barry', 'Barton', 'Beck', 'Benjamin', 'Benson', 'Berg', 'Bernard', 'Bruce', 'Ballard', 'Bryan', 'Barlow', 'Baron', 'Bartley', 'Benedict', 'Brandon', 'Beverly', 'Bain', 'Bentley', 'Bancroft', 'Bart', 'Basil', 'Ben', 'Bertram', 'Bill', 'Brian', 'Billy', 'Baber', 'Bader', 'Baily', 'Bainbridge', 'Beenle', 'Barbie', 'Bubles', 'Bard', 'Barret', 'Bartholomew', 'Beacher', 'Beau', 'Berger', 'Bernie', 'Bert', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Berton', 'Bevis', 'Bing', 'Blair', 'Blithe', 'Bob', 'Booth', 'Borg', 'Boris', 'Bowen', 'Boyce', 'Boyd', 'Brady', 'Brook', 'Bruno', 'Buck', 'Burgess', 'Burke', 'Burnell', 'Burton', 'Byron', 'Barbara', 'Betty', 'Brenda', 'Bonnie', 'Beatrice', 'Bernice', 'Brittany', 'Beth', 'Bessie', 'Brandy', 'Billie', 'Becky', 'Bobbie', 'Belinda', 'Blanche', 'Beulah', 'Bridget', 'Blanca', 'Brooke', 'Bernadette', 'Betsy', 'Baal', 'Babbie', 'Babette', 'Babs', 'Babur', 'Bacchus', 'Bachelor', 'Bagot', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Baillie', 'Balaam', 'Baldie', 'Baldrick', 'Balfour', 'Babbette', 'Babsi', 'Bailee', 'Balbina', 'Baljinder', 'Balvina', 'Bambi', 'Barbaro', 'Barbra', 'Barra', 'Baseerat', 'Baylee', 'Beatriz', 'Beaulah', 'Bebe', 'Becca', 'Becci', 'Becka', 'Beena', 'Begona', 'Bekki', 'Bell', 'Bella', 'Bellamy', 'Belle', 'Belva', 'Benedicte', 'Benediz', 'Benita', 'Berenice', 'Berkeley', 'Bernadine', 'Bernardine', 'Berneice', 'Berniece', 'Bernita', 'Berta', 'Bertha', 'Bertie', 'Beryl', 'Beshaun', 'Bethel', 'Bettie', 'Bettina', 'Bettyann', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bettye', 'Beverlee', 'Beyonce', 'Bianca', 'Bibi', 'Billye', 'Bilqis', 'Bindi', 'Birdie', 'Bitch', 'Blendena', 'Blossom', 'Blythe', 'Bobbye', 'Bogusia', 'Bonita', 'Bonny', 'Bowyer', 'Brailyn', 'Branca', 'Brandee', 'Brandice', 'Brandie', 'Brandis', 'Breana', 'Breann', 'Breanna', 'Breanne', 'Bree', 'Brejai', 'Brenna', 'Breonna', 'Briana', 'Brianna', 'Brianne', 'Bridgett', 'Bridgette', 'Bridie', 'Brielle', 'Brigette', 'Brigitte', 'Brisa', 'Britany', 'Brithney', 'Crispin', 'Crew', 'Cretcher', 'Creed', 'Creana', 'Cote', 'Cortez', 'Corjan', 'Cordell', 'Cooper', 'Conway', 'Conor', 'Conner', 'Colten', 'Colt', 'Colson', 'Colm', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cold', 'Codi', 'Cobby', 'Clio', 'Clifton', 'Claudio', 'Cisco', 'Chuckie', 'Chub', 'Christoper', 'Chokko', 'Chock', 'Chippy', 'Chico', 'Chesley', 'Chesdarith', 'Chechu', 'Chaz', 'Charalambos', 'Chandre', 'Chance', 'Chakiris', 'Chaim', 'Chadd', 'Cevin', 'Cesar', 'Cem', 'Celso', 'Cein', 'Cayden', 'Catlin', 'Cassio', 'Casper', 'Caspar', 'Carlyle', 'Carlton', 'Cantrell', 'Camron', 'Camren', 'Camden', 'Callum', 'Callan', 'Caleb', 'Cairns', 'CJ', 'Cyndy', 'Cyndi', 'Cristie', 'Cristiane', 'Cristal', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Crissy', 'Cosette', 'Corrie', 'Cornelia', 'Corliss', 'Corinne', 'Corinna', 'Corine', 'Corina', 'Corene', 'Cordie', 'Cordia', 'Cordelia', 'Corcoran', 'Coral', 'Consuelo', 'Conceicao', 'Collette', 'Coleen', 'Cloe', 'Cleta', 'Cleora', 'Clemmie', 'Clementine', 'Clementina', 'Clarissa', 'Clarine', 'Clarice', 'Claribel', 'Citlalli', 'Circe', 'Cinzia', 'Cindi', 'Cinda', 'Cierra', 'Ciera', 'Cielo', 'Ciarra', 'Ciara', 'Chyna', 'Chrystyna', 'Chrystal', 'Christiana', 'Christene', 'Christel', 'Christeen', 'Chrissy', 'Chiquita', 'Chiara', 'Chianti', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cheyenne', 'Cheyanne', 'Cheryle', 'Cherri', 'Cherise', 'Cherie', 'Chenille', 'Chelsie', 'Chelsi', 'Chaya', 'Chastity', 'Chasity', 'Chasidy', 'Charolette', 'Charmaine', 'Charly', 'Charlize', 'Charline', 'Charleen', 'Charla', 'Charisse', 'Charissa', 'Chantelle', 'Chantel', 'Chante', 'Chantal', 'Chaney', 'Chandi', 'Chanda', 'Chana', 'Celine', 'Celinda', 'Celina', 'Celica', 'Celia', 'Celeste', 'Celena', 'Ceanna', 'Caylin', 'Cayla', 'Catrina', 'Catina', 'Catia', 'Cathryn', 'Cathrine', 'Cathleen', 'Cathie', 'Cathi', 'Cathey', 'Caterina', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Catarina', 'Catalina', 'Cassius', 'Cassie', 'Cassia', 'Casandra', 'Caryn', 'Caryl', 'Caron', 'Carolynn', 'Carolina', 'Carolee', 'Carolann', 'Carmella', 'Carmelita', 'Carmela', 'Carlyn', 'Carlye', 'Carly', 'Carlotta', 'Carlie', 'Carli', 'Carley', 'Carlene', 'Carleen', 'Carlee', 'Carissa', 'Carisa', 'Caris', 'Carina', 'Carie', 'Cari', 'Caren', 'Careen', 'Cara', 'Candis', 'Candida', 'Camila', 'Camellia', 'Callie', 'Calli', 'Calista', 'Caleigh', 'Caitlynn', 'Caitlyn', 'Caitlin', 'Cailyn', 'Cady', 'Candy', 'Cassiel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Clint', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Davis', 'Dick', 'Duncan', 'Dunn', 'Daniel', 'David', 'Dean', 'Dennis', 'Douglas', 'Duke', 'Dalton', 'Davidson', 'Dillon', 'Donovan', 'Dorsey', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duran', 'Dyer', 'Dempsey', 'Derrick', 'Daly', 'Darby', 'Davies', 'Denny', 'Dewey', 'Doherty', 'Jeren', 'Jermey', 'Jeroen', 'Jeruh', 'Jessy', 'Jethro', 'Jett', 'Jevandyr', 'Jevon', 'Jianzhong', 'Jide', 'Jimi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jinks', 'Jjon', 'Josavion', 'Joachim', 'Joao', 'Joaquin', 'Jocke', 'Johansen', 'Johnathan', 'Johnathon', 'Johnno', 'Joker', 'Jomar', 'Jonathon', 'Jonny', 'Joost', 'Jorden', 'Jordy', 'Jorge', 'Jorgen', 'Joris', 'Jorne', 'Josue', 'Jothy', 'Joure', 'Jovan', 'Jovani', 'Jovanny', 'Jovany', 'Jovino', 'Jsonin', 'Judah', 'Juergen', 'Jujuan', 'Julien', 'Julio', 'Junior', 'Justus', 'Jyrikc', 'Jenny jennie', 'Jacky', 'Jabe', 'Jabriel', 'Jaiah', 'Jamahd', 'Jamo', 'Jamychal', 'Jarin', 'Jassir', 'Javarion', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Javu', 'Jawara', 'Jaxom', 'Jaymz', 'Jeandre', 'Jelani', 'Jelle', 'Jemario', 'Jenks', 'Jentrey', 'Jeordie', 'Jerold', 'Jeronimo', 'Jerrell', 'Jerrod', 'Jesper', 'Jestek', 'Jevaris', 'Jobon', 'Joelo', 'Johntify', 'Jono', 'Joop', 'Joran', 'Jorben', 'Joslain', 'Jostin', 'Josuan', 'Joven', 'Juca', 'Judd', 'Jbreauna', 'Jacarri', 'Jacinta', 'Jadi', 'Jadmalys', 'Jaduiga', 'Jahmilia', 'Jahnae', 'Jaialea', 'Jakerra', 'Jaleesa (jalisa)', 'Jamisen', 'Janai', 'Jandi', 'Janela', 'Janique', 'Janira', 'Jannemarij', 'Jannery', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jarrisha', 'Jasmynne', 'Jaygee', 'Jaynie', 'Jazdia', 'Jeanique', 'Jemila', 'Jenae', 'Jenai', 'Jenan', 'Jenine', 'Jennine', 'Jeralyn', 'Jermeka', 'Jerzie', 'Jimmia', 'Jinette', 'Jitske', 'Joneshia', 'Jonlys', 'Jonneke', 'Jordanne', 'Jordi', 'Jovelynn', 'Jowanna', 'Jarda', 'Jerica', 'Juliane', 'Joycelyn', 'Joline', 'Jamila', 'Jonina', 'Jocasta', 'Jeanie', 'Jerod', 'Jammy', 'Jannet', 'Jessey', 'Jingle', 'Jiro', 'Jacko', 'Jyotsna', 'Jam Hsiao', 'Joliet', 'Jon', 'Jeremiah', 'Jerald', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'King', 'Kevin', 'Kelley', 'Knight', 'Khaleesi', 'Kent', 'Kerr', 'Kirk', 'Keith', 'Kane', 'Kemp', 'Key', 'Kirby', 'Klein', 'Knox', 'Kyle', 'Kay', 'Kearney', 'Keen', 'Kendrick', 'Kenney', 'Kenny', 'Kern', 'Kimbrough', 'Kincaid', 'Kinsey', 'Kirkland', 'Karl', 'Kaye', 'Ken', 'Kennedy', 'Kenneth', 'Kerwin', 'Karen', 'Kathleen', 'Katherine', 'Kathy', 'Kathryn', 'Katie', 'Kristen', 'Kristin', 'Kristina', 'Katrina', 'Kayla', 'Kristine', 'Kristy', 'Kelli', 'Kara', 'Krista', 'Kendra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Krystal', 'Kari', 'Kerry', 'Kate', 'Kellie', 'Kristie', 'Kaley', 'Karan', 'Karin', 'Karla', 'Karol', 'Katharine', 'Kathie', 'Katy', 'Keely', 'Kelvin', 'Kendal', 'Kenna', 'Kenton', 'Kenyatta', 'Kermit', 'Kimberley', 'Kimberly', 'Kirsten', 'Kit', 'Kittie', 'Kitty', 'Kennard', 'Kaitlyn', 'Kiara', 'Kaci', 'Kacie', 'Kaela', 'Kaelyn', 'Kaia', 'Kail', 'Kaila', 'Kailee', 'Kailey', 'Kailyn', 'Kaitlan', 'Kaitleen', 'Kaitlin', 'Kaitlynn', 'Kaiya', 'Kajal', 'Kala', 'Kaleigh', 'Kaliyah', 'Kallie', 'Kevin', 'Cary', 'Karwai', 'Karena', 'Kadeem', 'Kaedyn', 'Kalem', 'Karteous', 'Kavir', 'Kc', 'Kedren', 'Kees', 'Keifer', 'Kepuhi', 'Ketan', 'Khari', 'Kieron', 'Kimmo', 'Kio', 'Kiril', 'Kirsanoff', 'Kirt', 'Kitrick', 'Knud', 'Koen', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kosta', 'Kyren', 'Kimoni', 'Kaeley', 'Kaisha', 'Kajsa', 'Kameo', 'Kamla', 'Kanequa', 'Karenah', 'Karice', 'Karinda', 'Karine', 'Kariyah', 'Kariz', 'Karlyn', 'Karyssa', 'Katrianna', 'Kaula', 'Kawana', 'Kaylia', 'Kearen', 'Keilani', 'Keita', 'Kenlyn', 'Kennisis', 'Kersha', 'Khailene', 'Khloe', 'Kiany', 'Kilianne', 'Kimmy', 'Kinty', 'Kinza', 'Kirri', 'Kirstie', 'Kourtlyn', 'Kramie', 'Kristal', 'Kristiina', 'Krystani', 'Krysten', 'Kyanna', 'Kysharnie', 'Kadar', 'Kamea', 'Kimi', 'Kisa', 'Keli', 'Kayne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kado', 'Kerk', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lewis', 'Lawrence', 'Lilith', 'Larissa', 'Lambert', 'Leonard', 'Lester', 'Lora', 'Lang', 'Lara', 'Larson', 'Leon', 'Lloyd', 'Lucas', 'Lance', 'Louis', 'Luther', 'Lyle', 'Lacey', 'Lacy', 'Ladd', 'Laird', 'Lange', 'Langston', 'Larkin', 'Latham', 'Lawler', 'Lay', 'Layne', 'Layton', 'Libby', 'Lilly', 'Lincoln', 'Linn', 'Landon', 'Liam', 'Lorenzo', 'Larry', 'Leo', 'Levi', 'Lucy', 'Lillie', 'Lamont', 'Laurence', 'Leland', 'Lenard', 'Leroy', 'Luis', 'Leif', 'Len', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennon', 'Leopold', 'Les', 'Lionel', 'Lucien', 'Lyndon', 'Linda', 'Lisa', 'Laura', 'Lori', 'Louise', 'Lois', 'Lillian', 'Lucille', 'Lauren', 'Lorraine', 'Loretta', 'Laurie', 'Lydia', 'Lena', 'Leah', 'Leona', 'Lindsey', 'Lindsay', 'Lynda', 'Luz', 'Lula', 'Lola', 'Latoya', 'Lynne', 'Leticia', 'Lynette', 'Laverne', 'Lorena', 'Lila', 'Lana', 'Lorene', 'Lucia', 'Lela', 'Lanny', 'Latonia', 'Laurel', 'Lauretta', 'Laurinda', 'Lavinia', 'Lean', 'Leda', 'Leila', 'Leilani', 'Lemuel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennie', 'Lenny', 'Lenora', 'Lenore', 'Leonie', 'Leonora', 'Leonore', 'Letitia', 'Lettie', 'Letty', 'Lili', 'Lily', 'Lina', 'Lindy', 'Linsey', 'Ladonna', 'Lashay', 'Lachelle', 'Lacie', 'Laila', 'Laine', 'Lainey', 'Lakeisha', 'LaKeydra', 'Lakita', 'Lal', 'Laney', 'Lanita', 'LaQuisha', 'Laquita', 'Larisa', 'Latifah', 'Latika', 'Latina', 'Latisha', 'Latricia', 'Lauran', 'Laureen', 'Lauryn', 'Lavina', 'Lavon', 'Lavonne', 'Lawanda', 'Layla', 'Layna', 'Leann', 'Leala', 'Leandra', 'Leanna', 'Leanne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leeann', 'Leesa', 'Leia', 'Leisa', 'Leisha', 'Leota', 'Lesly', 'Lexi', 'Lexie', 'Lia', 'Lian', 'Liana', 'Liang', 'Lianne', 'Lida', 'Lidia', 'Liliana', 'Lilliana', 'Limei', 'Linaeve', 'Linnea', 'Linnie', 'Lisandra', 'Lisette', 'Lita', 'Litzy', 'Liz', 'Liza', 'Lizabeth', 'Lizbeth', 'Lizeth', 'Lizette', 'Lizzie', 'Lolita', 'Loma', 'Lona', 'Lorenza', 'Lorinda', 'Lorna', 'Lorrie', 'Lotte', 'Lottie', 'Louisa', 'Lourdes', 'Luana', 'Lucija', 'Lucinda', 'Ludmila', 'Lulu', 'Luna', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lupita', 'Lurdes', 'Lux', 'Lyna', 'Lyndi', 'Lynnette', 'Lynsey', 'Lacorey', 'Laithan', 'Lamar', 'Lampros', 'Lardy', 'Latrell', 'Lawther', 'Lequeint', 'Levone', 'Leandro', 'Lefteris', 'Legend', 'Lenual', 'Leonardo', 'Leonel', 'Liandre', 'Lidong', 'Liem', 'Lijun', 'Likiak', 'Limie', 'Lleyton', 'Lockie', 'Lorcan', 'Lorry', 'Lotkova', 'Lotta', 'Loudyn', 'Lova', 'Lucah', 'Luciano', 'Ludwig', 'Lukas', 'Luke', 'Lytle', 'Lareina', 'Lucine', 'Leehom', 'Lasse', 'Laval', 'Leighton', 'Leitham', 'Lemar', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leyam', 'Liberio', 'Livio', 'Lohan', 'Lowell', 'Lafreeta', 'Lakida', 'Lakisha', 'Laniece', 'Laquinta', 'LaQunda', 'Lashanda', 'LaSondra', 'Laurabeth', 'Laurice', 'Leshawn', 'Leany', 'Leeandra', 'Lenaya', 'Lene', 'Lera', 'Lexy', 'Liat', 'Liesa', 'Ligia', 'Lindie', 'Linef', 'Lisanne', 'Loanda', 'Loann', 'Lonneke', 'Luisa', 'Luquasha', 'Luv', 'Luzia', 'Lynndette', 'Leyla', 'Lorada', 'Lyanna', 'Lykke', 'Lennor', 'Lynch', 'Luthur', 'Lala', 'Lamond', 'Lissa', 'Licia', 'Leor', 'Leron', 'Lukman', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lyron', 'Limber', 'Levana', 'Lesa', 'Liliy', 'Loletta', 'Lassie', 'Loren', 'Lilia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Martin', 'Moore', 'Mary', 'Marshall', 'Murphy', 'Murray', 'Mason', 'Mitchell', 'Morris', 'Moon', 'Marsh', 'Maxwell', 'Michael', 'Miles', 'Morton', 'Moses', 'May', 'MacDonald', 'Mack', 'Maddox', 'Mann', 'Mathews', 'Maynard', 'Magee', 'Malcolm', 'Marcus', 'Mark', 'Marvin', 'Matthew', 'Mahoney', 'Major', 'Mallory', 'Malloy', 'Maloney', 'Manley', 'Mansfield', 'Manuel', 'Marin', 'Marquis', 'Mayfield', 'Maria', 'Matt', 'Maurice', 'Max', 'Mike', 'Milo', 'Melinda', 'Mercedes', 'Macy', 'Malcom', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcellus', 'Marlin', 'Marvel', 'Mathew', 'Mya', 'Magical', 'Mandel', 'Marico', 'Marlon', 'Maximilian', 'Merlin', 'Michell', 'Mick', 'Montague', 'Mortimer', 'Myron', 'Madison', 'Michelle', 'Melissa', 'Martha', 'Marie', 'Mildred', 'Marilyn', 'Marjorie', 'Monica', 'Marion', 'Melanie', 'Maureen', 'Marcia', 'Minnie', 'Marlene', 'Marian', 'Maxine', 'Mabel', 'Marsha', 'Margie', 'Miriam', 'Misty', 'Mae', 'Margarita', 'Marguerite', 'Molly', 'Madeline', 'Monique', 'Maggie', 'Maryann', 'Melody', 'Mamie', 'Marianne', 'Myra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcella', 'Mona', 'Meghan', 'Mindy', 'Mandy', 'Mirana', 'Marta', 'Mac', 'Madeleine', 'Madge', 'Madonna', 'Magda', 'Magdalen', 'Magnolia', 'Maisie', 'Malvina', 'Margaret', 'Marge', 'Margery', 'Margot', 'Mariana', 'Marietta', 'Marina', 'Marjory', 'Marnie', 'Mathilda', 'Matilda', 'Maud', 'Maude', 'Maura', 'Mavis', 'Michaela', 'Terrence', 'Tess', 'Tessa', 'Tessie', 'Thad', 'Thaddeus', 'Thalia', 'Thea', 'Theodora', 'Theresia', 'Thomasina', 'Tilda', 'Tillie', 'Torrie', 'Trevor', 'Tristan', 'Trudy', 'Tabatha', 'Tabea', 'Tahnee', 'Taina', 'Taisha', 'Taleen', 'Talia', 'Talina', 'Talisha', 'Talitha', 'Taliyah', 'Tallulah', 'Tamah', 'Tamatha', 'Tameka', 'Tamia', 'Tamika', 'Tamsen', 'Tamsin', 'Tamzin', 'Tana', 'Tangi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tanisha', 'Taniya', 'Tanja', 'Taryn', 'Tatiana', 'Tatianna', 'Tatjana', 'Tatyana', 'Tawanna', 'Tawny', 'Taya', 'Tayla', 'Taysia', 'Tegan', 'Telma', 'Tennille', 'Tera', 'Teyana', 'Therese', 'Tia', 'Tiana', 'Tianna', 'Tiara', 'Tierney', 'Tierra', 'Tiffani', 'Tirzah', 'Tomara', 'Tonia', 'Tori', 'Toya', 'Tracie', 'Trang', 'Trina', 'Trish', 'Trixie', 'Tryna', 'Twila', 'Tyla', 'Tyra', 'Taber', 'Tad', 'Taj', 'Tajon', 'Tamaitikoha', 'Tamaris', 'Tambor', 'Tampe', 'Tapasvi', 'Tarek', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tareo', 'Tarian', 'Tariku', 'Tariq', 'Tavis', 'Taylen', 'Tazel', 'Tehmasp', 'Teifion', 'Teno', 'Terrill', 'Teymur', 'Thales', 'Thao', 'Thayne', 'Thesshell', 'Thien', 'Thierry', 'Thinh', 'Tiago', 'Timmi', 'Timmy', 'Timofey', 'Tino', 'Tinon', 'Tion', 'Tishon', 'Tito', 'Tobyn', 'Toddy', 'Tonaka', 'Tonino', 'Tonio', 'Topacio', 'Torrey', 'Tosh', 'Traman', 'Travers', 'Travon', 'Trayden', 'Trayvon', 'Trenton', 'Trever', 'Trevion', 'Trevis', 'Trevoc', 'Trevon', 'Trey', 'Treyvon', 'Trianno', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Triano', 'Trijny', 'Tristian', 'Tristin', 'Triston', 'Tronne', 'Tullio', 'Tupac', 'Tureyuki', 'Tusitala', 'Twan', 'Twoee', 'Tylor', 'Tyquan', 'Tyrese', 'Tyshawn', 'Tyshon', 'Tavia', 'Taiva', 'Tamir', 'Tanyel', 'Tasos', 'Taven', 'Tazhon', 'Teikari', 'Teylor', 'Themis', 'Thobian', 'Thylin', 'Timmu', 'Tineke', 'Tj', 'Toyeeb', 'Trystan', 'Tuca', 'Tuwan', 'Twiggy', 'Tygo', 'Tyzhe', 'Timerante', 'Tylique', 'Tshima', 'Tabby', 'Taige', 'Taila', 'Terence', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Vance', 'Vera', 'Vernon', 'Vinson', 'Victor', 'Virgil', 'Victoria', 'Viola', 'Vicente', 'Van', 'Verne', 'Vic', 'Vito', 'Vivian', 'Virginia', 'Valerie', 'Veronica', 'Vanessa', 'Vicki', 'Vickie', 'Velma', 'Violet', 'Verna', 'Vicky', 'Valeria', 'Valery', 'Venus', 'Verena', 'Vesta', 'Vida', 'Valencia', 'Valentina', 'Valorie', 'Vanda', 'Vanesa', 'Vania', 'Varsha', 'Veena', 'Veer', 'Vena', 'Verity', 'Veronique', 'Vesna', 'Vien', 'Vijaya', 'Vikki', 'Vilma', 'Viorica', 'Viviana', 'Vadim', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Walker', 'Wilson', 'Ward', 'Webb', 'Warren', 'Washington', 'Watkins', 'West', 'Wheeler', 'Williamson', 'Willis', 'Wallace', 'Wade', 'Walter', 'Warner', 'Webster', 'William', 'Waller', 'Walton', 'Ware', 'Watts', 'Weber', 'Whitehead', 'Wilder', 'Wilkinson', 'Witt', 'Wolfe', 'Wilbur', 'Winston', 'Winifred', 'Waite', 'Walden', 'Waldron', 'Washburn', 'Watt', 'Webber', 'Weldon', 'Wesley', 'Westbrook', 'Weston', 'Whitfield', 'Whitlock', 'Whitmore', 'Whittaker', 'Willard', 'Willoughby', 'Winslow', 'Wayne', 'Wendell', 'Woodrow', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy']

function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
}


function zonghe() {
    if (text("立即开始").exists()) {
        TKB.set_log("立即开始")
        click(300, 1800)
        sleep(1000)
        if (id("com.android.systemui:id/remember").exists()) {
            var aa = id("com.android.systemui:id/remember").findOnce().checked();
            if (aa == false) {
                var bb = id("com.android.systemui:id/remember").findOnce().bounds();
                TKB.set_log(bb.centerX())
                TKB.set_log(bb.centerY())
                click(bb.centerX(), bb.centerY())
                sleep(1000)
            }
        }
        click(800, 1850)
        sleep(1000)
        click("立即开始")
        sleep(2000)
    }
    findeclick("text", "稍后", 800)
    findeclick("text", "刷新", 800)
    findeclick("text", "好的", 800)
    findeclick("text", "始终同意", 800)
    findeclick("text", "以后再说", 800)
    findeclick("text", "我知道了", 800)
    findeclick("text", "知道了", 800)
    findeclick("text", "下次再说", 800)
    findeclick("text", "重试", 800)
    findeclick("text", "跳过", 800)
    findeclick("text", "确认", 800)
    findeclick("id", "com.ss.android.ugc.aweme:id/bn0", 800)
    if (text("添加头像").exists() && text("点击设置头像").exists()) {
        log("添加头像")
        back()
        sleep(1000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        log("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        log("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        log("发现更多主播")
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        log("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        log("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        log("同步到今日头条");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        log("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        log("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        log("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        log("以后再说2");
        try {
            var ss = text("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (desc("以后再说").exists()) {
        log("以后再说3");
        try {
            var ss = desc("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (text("继续观看").exists()) {
        log("继续观看");
        try {
            var ss = text("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (desc("继续观看").exists()) {
        log("继续观看2");
        try {
            var ss = desc("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (text("继续播放").exists()) {
        log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (text("立即赠送").exists()) {
        log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        click(939, 523);
        log("立即更新");
        sleep(200)
        back()
        sleep(3000)
    }
    if (text("允许").exists()) {
        click("允许");
        log("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}
var msgz
//改资料
function gaizl() {
    TKB.set_log("改资料")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    // var name_result = false
    // var img_result = false
    // var jj_result = false
    // var name_return = '抖音昵称'
    // var img_return = '抖音头像'
    // var jj_return = '抖音简介'
    // var status = 0
    var x = 'zzzzzz'
    var name = device.getIMEI()
    var tep = 0 //判断编辑资料界面该干啥
    var xs = action_args['param']
    var zz = TKB.get_name(name, 0)
    if (zz == false || zz == null || zz == []) {
        toastLog('素材获取错误')
        msgz = '素材获取错误'
        return false
    } else {
        if (xs['是否修改名字'] == '是') {
            var nickname = zz['nickname']
            if (nickname != undefined) {
                var nickname = TKB.matching(nickname)
                if (nickname == null) {
                    msgz = '名字全特殊符号'
                    return false
                }
            } else {
                msgz = '名字为空'
                return false
            }
        }
        if (xs['是否修改头像'] == '是') {
            var img = zz['photo']
            if (img != undefined) {
                var sp = TKB.xztp(img)
                if (sp == false) {
                    TKB.set_log("下载图片失败")
                    return false
                }
            } else {
                msgz = '头像为空'
                return false
            }
        }
        if (xs['是否修改简介'] == '是') {
            var remarks = zz['remarks']
            if (remarks != undefined) {
                var jianjie = TKB.matching(remarks)
                if (jianjie == null) {
                    msgz = '简介全特殊符号'
                    return false
                }
            } else {
                msgz = '简介为空'
                return false
            }
        }
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.set_log("时间够了退出")
                TKB.clear()
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.set_log("超时没在首页")
                swipe(500, 1600, 600, 400, 1200);
                sleep(500)
                back()
                sleep(1000)
                TKB.clear()
                sleep(3000)
                launch("com.ss.android.ugc.aweme")
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                TKB.set_log("首页")
                click(980, 1850)
                sleep(2000)
                if (text("编辑资料").exists()) {
                    TKB.set_log("编辑资料")
                    click("编辑资料")
                    sleep(2000)
                } else {
                    var ss = TKB.getAllTexts()
                    for (var i = 0; i < ss.length; i++) {
                        if (ss[i].indexOf("编辑资料") != -1) {
                            click(ss[i])
                            sleep(1000)
                            break
                        }
                    }
                }
            }
            if (text("名字").exists() && text("抖音号").exists() || text("编辑资料").exists() && text("抖音号").exists() || text("编辑个人资料").exists() && text("名字").exists()) {
                TKB.set_log("编辑资料界面")
                if (tep == 0) {
                    if (xs['是否修改头像'] == '是') {
                        TKB.set_log("更改头像")
                        click(540, 440)
                        sleep(500)
                        click("点击更换头像")
                        sleep(1500)
                        if (text("相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("相册选择").exists()) {
                            TKB.set_log("相册选择")
                            click("相册选择")
                            sleep(2000)
                        }
                        if (text("从相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("从相册选择").exists()) {
                            TKB.set_log("从相册选择")
                            click("从相册选择")
                            sleep(3000)
                        }
                        if (text("全部").exists() && text("预览").exists() || text("确定").exists() && id("com.ss.android.ugc.aweme:id/e9r").exists()) {
                            TKB.set_log("选择照片")
                            click(270, 320) //选择第一张
                            sleep(1000)
                            if (text("图片太小").exists() && text("知道了").exists()) {
                                TKB.set_log("图片太小")
                                toastLog('图片太小')
                                back()
                                sleep(500)
                                back()
                                sleep(2000)
                                tep = 1
                                img_result = false
                                img_return = '抖音头像不符合'
                            } else {
                                click(950, 1820) //确定
                                sleep(2000)
                            }
                        }
                        if (text("完成").exists() && text("裁剪").exists() || text("裁剪").exists() && text("取消").exists()) {
                            TKB.set_log("裁剪")
                            click(960, 1710) //确定
                            sleep(400)
                            click("完成")
                            sleep(1000)
                            toastLog("头像修改完成")
                            img_result = true
                            img_return = '抖音头像符合'
                            tep = 1
                        }
                        if (TKB.zhaose("if isColor(284,978,0xffffff,80) and isColor(260,959,0x4f4f50,80) and isColor(328,979,0xffffff,80) and isColor(452,980,0xffffff,80) and isColor(527,1006,0xffffff,80) and isColor(623,978,0xffffff,80) and isColor(729,978,0xffffff,80) and isColor(778,985,0xffffff,80) and isColor(823,1022,0x4f4f50,80) then")) {
                            TKB.set_log("资料审核中")
                            // info = '抖音资料审核中,' + img_return + ',抖音资料审核中'
                            // TKB.set_log(info)
                            // TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            msgz = '资料审核中'
                            back()
                            sleep(2000)
                            return false
                        }
                        if (TKB.zhaose("if isColor(223,946,0x030405,80) and isColor(236,967,0xffffff,80) and isColor(390,968,0xffffff,80) and isColor(485,971,0xffffff,80) and isColor(705,982,0xffffff,80) and isColor(831,973,0xffffff,80) and isColor(509,1014,0xffffff,80) and isColor(567,1011,0xffffff,80) and isColor(677,1025,0x030405,80) then")) {
                            TKB.set_log("今日修改上限")
                            // info = '抖音今日修改上限,' + img_return + ',抖音今日修改上限'
                            // TKB.set_log(info)
                            // TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            msgz = '今日修改上限'
                            back()
                            sleep(2000)
                            return false
                        }
                    } else {
                        tep = 1
                        TKB.set_log("头像不修改")
                        img_return = '抖音头像不修改'
                    }
                }
                if (tep == 1) {
                    if (xs['是否修改名字'] == '是') {
                        // TKB.set_log("修改名字")
                        if (textContains(nickname).exists() && text('名字').exists()) {
                            TKB.set_log("已经是该名字了,名字修改完成")
                            toastLog("名字修改完成")
                            sleep(2000)
                            tep = 2
                            name_result = true
                            name_return = '抖音昵称符合'
                        } else {
                            click('名字')
                            sleep(2000)
                        }
                        if (text('修改名字').exists() && text('保存').exists()) {
                            setText(nickname)
                            sleep(500)
                            click("保存")
                            sleep(1000)
                        }
                        if (TKB.zhaose("if isColor(290,982,0xffffff,80) and isColor(334,981,0xffffff,80) and isColor(386,982,0xffffff,80) and isColor(528,1005,0xffffff,80) and isColor(605,988,0xffffff,80) and isColor(734,988,0xffffff,80) and isColor(782,987,0xffffff,80) and isColor(559,973,0x030405,80) and isColor(568,1037,0x030405,80) then")) {
                            TKB.set_log("昵称已被使用")
                            toastLog("昵称已被使用")
                            nickname = nickname +nc[random(0, nc.length - 1)]
                        }
                        if (TKB.zhaose("if isColor(284,978,0xffffff,80) and isColor(260,959,0x4f4f50,80) and isColor(328,979,0xffffff,80) and isColor(452,980,0xffffff,80) and isColor(527,1006,0xffffff,80) and isColor(623,978,0xffffff,80) and isColor(729,978,0xffffff,80) and isColor(778,985,0xffffff,80) and isColor(823,1022,0x4f4f50,80) then")) {
                            TKB.set_log("资料审核中")
                            // info = name_return + ',' + img_return + ',抖音今日修改上限'
                            // TKB.set_log(info)
                            // TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            msgz = '资料审核中'
                            back()
                            sleep(2000)
                            return false
                        }
                        if (TKB.zhaose("if isColor(223,946,0x030405,80) and isColor(236,967,0xffffff,80) and isColor(390,968,0xffffff,80) and isColor(485,971,0xffffff,80) and isColor(705,982,0xffffff,80) and isColor(831,973,0xffffff,80) and isColor(509,1014,0xffffff,80) and isColor(567,1011,0xffffff,80) and isColor(677,1025,0x030405,80) then")) {
                            TKB.set_log("今日修改上限")
                            // info = name_return + ',' + img_return + ',抖音今日修改上限'
                            // TKB.set_log(info)
                            // TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            msgz = '今日修改上限'
                            back()
                            sleep(2000)
                            return false
                        }
                    } else {
                        tep = 2
                        TKB.set_log("昵称不修改")
                        name_return = '抖音昵称不修改'
                    }
                } else if (tep == 2) {
                    if (xs['是否修改性别'] == '是') {
                        if (xs['性别'] == '男' || xs['性别'] == '女') {
                            if (text(xs['性别']).exists() && text("性别").exists()) {
                                toastLog("性别修改完成")
                                tep = 3
                            } else {
                                click('性别')
                                sleep(2000)
                                if (text("男").exists() && text("女").exists()) {
                                    TKB.set_log("修改性别")
                                    click(xs['性别'])
                                    sleep(1000)
                                    toastLog("性别修改完成")
                                    tep = 3
                                }
                            }
                        }
                    } else {
                        tep = 3
                        TKB.set_log("性别不修改")
                    }

                } else if (tep == 3) {
                    if (xs['是否修改简介'] == '是') {
                        // TKB.set_log("修改简介")
                        if (textContains(jianjie).exists() && text('名字').exists()) {
                            TKB.set_log("已经是该简介了,简介修改完成")
                            toastLog("简介修改完成")
                            jj_return = '抖音简介符合'
                            jj_result = true
                            tep = 4
                        } else {
                            click('简介')
                            sleep(2000)
                        }
                        if (text('修改简介').exists() && text('保存').exists()) {
                            TKB.set_log("修改简介")
                            setText(remarks)
                            sleep(500)
                            click("保存")
                            sleep(1000)
                        }
                        if (TKB.zhaose("if isColor(284,978,0xffffff,80) and isColor(260,959,0x4f4f50,80) and isColor(328,979,0xffffff,80) and isColor(452,980,0xffffff,80) and isColor(527,1006,0xffffff,80) and isColor(623,978,0xffffff,80) and isColor(729,978,0xffffff,80) and isColor(778,985,0xffffff,80) and isColor(823,1022,0x4f4f50,80) then")) {
                            TKB.set_log("资料审核中")
                            // info = name_return + ',' + img_return + ',抖音今日修改上限'
                            // TKB.set_log(info)
                            // TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            msgz = '资料审核中'
                            back()
                            sleep(2000)
                            return false
                        }
                        if (TKB.zhaose("if isColor(223,946,0x030405,80) and isColor(236,967,0xffffff,80) and isColor(390,968,0xffffff,80) and isColor(485,971,0xffffff,80) and isColor(705,982,0xffffff,80) and isColor(831,973,0xffffff,80) and isColor(509,1014,0xffffff,80) and isColor(567,1011,0xffffff,80) and isColor(677,1025,0x030405,80) then")) {
                            TKB.set_log("今日修改上限")
                            // info = name_return + ',' + img_return + ',抖音今日修改上限'
                            // TKB.set_log(info)
                            // TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            msgz = '今日修改上限'
                            back()
                            sleep(2000)
                            return false
                        }
                    } else {
                        tep = 4
                        TKB.set_log("简介不修改")
                        jj_return = '抖音简介不修改'
                    }
                } else if (tep == 4) {
                    if (!bounds(792, 1435, 972, 1495).exists()) {
                        TKB.set_log('生日设置完成')
                        toastLog('生日设置完成')
                        tep = 5
                    } else {

                        if (text('生日').exists() && text('点击设置').exists()) {
                            TKB.set_log('设置生日')
                            click('生日')
                            sleep(2000)
                        }
                        if (text('不展示 ON').exists()) {
                            click('不展示 ON')
                            sleep(1000)
                        } else if (text('不展示 OFF').exists() && text('确定').exists()) {
                            TKB.set_log('年')
                            for (var i = 0; i < random(0, 10); i++) {
                                swipe(215, 1635, 215, 1815, 800)
                                sleep(500)
                            }
                            TKB.set_log('月')
                            for (var i = 0; i < random(0, 11); i++) {
                                swipe(515, 1815, 515, 1635, 800)
                                sleep(500)
                            }
                            TKB.set_log('日')
                            for (var i = 0; i < random(0, 30); i++) {
                                swipe(815, 1815, 815, 1635, 800)
                                sleep(500)
                            }
                            sleep(3000)
                            click('确定')
                            sleep(1000)
                        }
                    }
                } else if (tep == 5) {
                    while (1) {
                        try {
                            var y = 0
                            if (!text('地区').exists() && !text('名字').exists()) {
                                if (id('com.ss.android.ugc.aweme:id/gft').exists()) {
                                    var z = id('com.ss.android.ugc.aweme:id/gft').find()
                                }
                                if (id('com.ss.android.ugc.aweme:id/hrg').exists()) {
                                    var z = id('com.ss.android.ugc.aweme:id/hrg').find()
                                }
                                for (var i = 0; i < z.length; i++) {
                                    if (random(0, 6) == 5) {
                                        if (z[i].text() != '暂不设置') {
                                            click(z[i].text())
                                            x = z[i].text()
                                            sleep(3000)
                                            y = 1
                                            break
                                        }
                                    }
                                }
                                if (y == 0) {
                                    swipe(500, 1800, 500, 500, 800)
                                    sleep(3000)
                                }
                            }
                            if (text('地区').exists() && text('名字').exists()) {
                                var xx = TKB.getAllTexts()
                                if (xx.indexOf(x) != -1 || textContains(x).findOnce()) {
                                    toastLog('地区设置成功')
                                    TKB.set_log('地区设置成功')
                                    tep = 6
                                    break
                                } else {
                                    TKB.set_log('点击地区')
                                    click('地区')
                                    sleep(2000)
                                }
                            }
                        } catch (error) {
                            TKB.set_log(error)
                            sleep(1000)
                        }
                    }
                } else if (tep == 6) {
                    if (!text("关注").exists() && !text("消息").exists() && !text("我").exists()) {
                        back()
                        TKB.set_log("返回首页")
                        sleep(3000)
                    }
                    if (xs['是否修改头像'] == '是') {
                        if (text("关注").exists() && text("消息").exists() && text("我").exists()) {
                            if (desc("修改主页背景图").exists()) {
                                if (id('com.ss.android.ugc.aweme:id/bbo').exists()) {
                                    id('com.ss.android.ugc.aweme:id/bbo').findOnce().click()
                                }
                                if (id('com.ss.android.ugc.aweme:id/b1_').exists()) {
                                    id('com.ss.android.ugc.aweme:id/b1_').findOnce().click()
                                }
                                TKB.set_log("点击修改主页背景图")
                                sleep(3000)
                            }
                            if (text("更换").exists() && desc("下载").exists()) {
                                click("更换")
                                TKB.set_log("点击更换")
                                sleep(3000)
                            }
                            if (text("从相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("从相册选择").exists()) {
                                TKB.set_log("从相册选择")
                                click("从相册选择")
                                sleep(2000)
                            }
                            if (text("相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("相册选择").exists()) {
                                TKB.set_log("相册选择")
                                click("从相册选择")
                                sleep(2000)
                            }
                            if (text("全部").exists() && text("预览").exists() || text("确定").exists() && id("com.ss.android.ugc.aweme:id/e9r").exists()) {
                                TKB.set_log("选择照片")
                                click(270, 320) //选择第一张
                                sleep(1000)
                                if (text("图片太小").exists() && text("知道了").exists()) {
                                    TKB.set_log("图片太小")
                                    toastLog('图片太小')
                                    back()
                                    sleep(2000)
                                    back()
                                    sleep(2000)
                                } else {
                                    click(950, 1820) //确定
                                    sleep(2000)
                                }
                            }
                            if (text("完成").exists() && text("裁剪").exists() || text("裁剪").exists() && text("取消").exists()) {
                                TKB.set_log("裁剪")
                                click("完成")
                                sleep(1000)
                                toastLog("主页背景修改完成")
                                tep = 7
                            }
                        }
                    } else {
                        tep = 7
                        TKB.set_log("主页背景不修改")
                    }
                } else if (tep == 7) {
                    // if (name_result == true && img_result == true && jj_result == true) {
                    //     status = 1
                    // } else {
                    //     status = 2
                    // }
                    // info = name_return + ',' + img_return + ',' + jj_return
                    // TKB.set_log(info)
                    // TKB.upinfo(sbip, user_id, yhbh, info, status)
                    TKB.set_log("执行完了退出")
                    toastLog("执行完了退出")
                    back()
                    sleep(2000)
                    TKB.clear()
                    return true
                }
            }
        } catch (error) {
            TKB.set_log(error)
            sleep(3000)
        }
    }
}

_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({
                notice_name: "task_time_stamp",
                notice_content: (new Date()).getTime()
            })
        }, 15 * 1000)
    })
})
var z = gaizl()
if (z == true) {
    var msg_num = 1
    var msg = '成功'
} else {
    var msg_num = 0
    if (msgz != '' || msgz != undefined) {
        var msg = msgz
    } else {
        var msg = '失败'
    }
}
TKB.send_message({
    notice_name: 'stop',
    notice_content: [msg_num, msg]
})

