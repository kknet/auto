﻿log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.ss.android.ugc.live" //该项目包名
var xmxh = "7" //项目序号
var followUrl
var commentUrl
var comment_text
var focuson_obj
var name;
var jianjie;


//********************************************************下载播放mp3***************************************************************

//*******************************************************火山养号 *****************************************************************

nc = ['Allen', 'Ava', 'Andy', 'Armstrong', 'Arnold', 'Adams', 'Alston', 'Albert', 'Ashley', 'Alison', 'Adkins', 'Anthony', 'Amos', 'Andrew', 'Archer', 'Augustine', 'Abbott', 'Abel', 'Abraham', 'Adair', 'Aldrich', 'Angel', 'Abernathy', 'Abrams', 'Acker', 'Ackerman', 'Adamson', 'Adcock', 'Adler', 'Alonso', 'Ali', 'Alonzo', 'Abra', 'Angle', 'Alger', 'Archibald', 'Armand', 'August', 'Abner', 'Adrian', 'Ahern', 'Alfred', 'Amy', 'Abbey', 'Abell', 'Abercrombie', 'Abernethy', 'Able', 'Abrahams', 'Abrahamson', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Abram', 'Abramson', 'Acheson', 'Acton', 'Acuff', 'Addington', 'Addy', 'Alfonso', 'Allan', 'Alton', 'Annabelle', 'Algernon', 'Alva', 'Alvin', 'Alvis', 'Andre', 'Angelo', 'Augus', 'Ansel', 'Antony', 'Antoine', 'Antonio', 'Aries', 'Arlen', 'Arno', 'Arvin', 'Asa', 'Ashbur', 'Atwood', 'Aaron', 'Adam', 'Adolph', 'Adonis', 'Alan', 'Abigail', 'Angela', 'Anna', 'Amanda', 'Ann', 'Alice', 'Andrea', 'Anne', 'Annie', 'Anita', 'Amber', 'April', 'Audrey', 'Annette', 'Ana', 'Alma', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Agnes', 'Arlene', 'Ada', 'Angie', 'Amelia', 'Alberta', 'Antoinette', 'Angelica', 'Adrienne', 'Alexandra', 'Angelina', 'Antonia', 'Alyssa', 'Aalto', 'Abadam', 'Abbado', 'Abbas', 'Abbe', 'Abbet', 'Abbs', 'Abby', 'Abdey', 'Abdie', 'Abdul', 'Abelard', 'Abelson', 'Abercromby', 'Aberdeen', 'Ableson', 'Ablett', 'Ablewhite', 'Ablitt', 'Ablott', 'Abrikosor', 'Absalom', 'Absolom', 'Absolon', 'Aby', 'Ace', 'Achard', 'Achebe', 'Achilles', 'Ackary', 'Ackerly', 'Ackers', 'Ackery', 'Acket', 'Acketts', 'Ackland', 'Ackroyd', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Acland', 'Acre', 'Acreman', 'Acres', 'Acroyd', 'Adah', 'Adcocks', 'Addams', 'Adderley', 'Addess', 'Addey', 'Addie', 'Addinsell', 'Addyman', 'Ade', 'Adeane', 'Adela', 'Adelaide', 'Adele', 'Adelina', 'Adeline', 'Adenauer', 'Ades', 'Adey', 'Adie', 'Adkin', 'Adlam', 'Adlard', 'Alexandr', 'Alfredo', 'Apollo', 'Aaliyah', 'Aamina', 'Aaryn', 'Abagail', 'Abbie', 'Abbigail', 'Abeille', 'Abigale', 'Abigayle', 'Abrianna', 'Abril', 'Acacia', 'Adaeze', 'Adaline', 'Adara', 'Adelaida', 'Adelia', 'Adell', 'Adella', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Adelle', 'Adesina', 'Adhrah', 'Aditi', 'Adn', 'Adriana', 'Adriane', 'Adrianna', 'Adrianne', 'Africa', 'Afshan', 'Agatha', 'Ageeth', 'Aggie', 'Ahli', 'Ahoo', 'Aidalyn', 'Aidee', 'Aileen', 'Aileena', 'Aileigh', 'Aimee', 'Ainhoa', 'Ainslee', 'Ainsley', 'Aisha', 'Aisling', 'Aitana', 'Aiyana', 'Aja', 'Ajaine', 'Akebulan', 'Akita', 'Alaa', 'Aladina', 'Alaina', 'Alaine', 'Alaja', 'Alana', 'Alanis', 'Alanna', 'Alanya', 'Alayna', 'Alaysia', 'Albany', 'Albertha', 'Albertine', 'Albina', 'Alda', 'Aldine', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aleah', 'Alecia', 'Aleece', 'Aleisha', 'Alejandra', 'Alejandrin', 'Aleksa', 'Alena', 'Alene', 'Alesha', 'Alesia', 'Alessandra', 'Aleta', 'Aleth', 'Aletha', 'Alexandrea', 'Alexandria', 'Alexia', 'Alexus', 'Alexys', 'Alfreda', 'Alia', 'Alicia', 'Alida', 'Aliece', 'Alina', 'Aline', 'Alinta', 'Alisa', 'Alisha', 'Alissa', 'Alivia', 'Alix', 'Aliya', 'Aliyah', 'Aliza', 'Alize', 'Alkhouri', 'Alla', 'Allegra', 'Allene', 'Alline', 'Allura', 'Ally', 'Allyson', 'Allyssa', 'Almeda', 'Almira', 'Almudena', 'Alona', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Alondra', 'Alrun', 'Alta', 'Altagracia', 'Altha', 'Althea', 'Alvena', 'Alvera', 'Alverta', 'Alvina', 'Alyana', 'Alyanna', 'Alyce', 'Alycia', 'Alyona', 'Alysa', 'Alyse', 'Alysha', 'Alysia', 'Alyson', 'Alysyn', 'Amalia', 'Amandeep', 'Amani', 'Amara', 'Amarantha', 'Amarha', 'Amaris', 'Amarlianna', 'Amaya', 'Amberleigh', 'Amberley', 'Amee', 'Amena', 'Amera', 'Amerbel', 'America', 'Ami', 'Amiciyah', 'Amie', 'Amira', 'Amparo', 'Amya', 'Anabel', 'Anahi', 'Anais', 'Anajah', 'Analise', 'Anastasia', 'Anaya', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Andreea', 'Andreina', 'Andreisha', 'Andreshia', 'Andria', 'Aneissa', 'Anele', 'Anessa', 'Anette', 'Angelia', 'Angelie', 'Angeline', 'Angelique', 'Angelita', 'Angharad', 'Anika', 'Anisah', 'Anise', 'Anissa', 'Anitra', 'Aniya', 'Aniyah', 'Anja', 'Anjali', 'Anjanette', 'Anjel', 'Anjelica', 'Ankie', 'Annabella', 'Annah', 'Annalee', 'Annalisa', 'Annalise', 'Annalouise', 'Annam', 'Annamae', 'Annamarie', 'Annelie', 'Annelies', 'Annemarie', 'Annetta', 'Annica', 'Annick', 'Annika', 'Annike', 'Annis', 'Anny', 'Anouk', 'Ansley', 'Antionette', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Antonetta', 'Antonette', 'Antonietta', 'Antonina', 'Antra', 'Anya', 'Aprille', 'Aqsa', 'Ara', 'Araceli', 'Aracelli', 'Aracely', 'Ardella', 'Ardene', 'Ardis', 'Ardith', 'Ardoryna', 'Areej', 'Areli', 'Arely', 'Aretha', 'Aria', 'Ariana', 'Arianna', 'Arianne', 'Ariella', 'Arielle', 'Arionna', 'Ariyana', 'Arleen', 'Arlett', 'Arline', 'Armida', 'Arnela', 'Aroha', 'Arole', 'Arrie', 'Arshia', 'Artary', 'Artilya', 'Aruma', 'Arvilla', 'Arya', 'Aryana', 'Aryanna', 'Asasia', 'Asdin', 'Asha', 'Ashanti', 'Ashely', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ashland', 'Ashlea', 'Ashlee', 'Ashleigh', 'Ashlie', 'Ashly', 'Ashlyn', 'Ashlynn', 'Ashra', 'Ashtyn', 'Asia', 'Asifa', 'Asma', 'Asmita', 'Aspen', 'Astrid', 'Asya', 'Atbar', 'Athena', 'Atiyah', 'Aubrie', 'Auburn', 'Audra', 'Auli', 'Aurora', 'Austra', 'Avril', 'Aya', 'Ayana', 'Ayanna', 'Aydn', 'Ayel', 'Ayesha', 'Ayla', 'Aylin', 'Ayra', 'Azeeza', 'Aziza', 'Azrael', 'Aariz', 'Abayomi', 'Abdiel', 'Abdullah', 'Abnir', 'Adalberto', 'Adan', 'Addrion', 'Adeel', 'Adelard', 'Adelbert', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Adolf', 'Adolfo', 'Adolphus', 'Adrain', 'Adriel', 'Adwan', 'Ady', 'Agustin', 'Ahmad', 'Ahmed', 'Ahmilliyon', 'Ajax', 'Akeem', 'Akira', 'Alando', 'Alberto', 'Albino', 'Alcino', 'Alden', 'Aldo', 'Aldrick', 'Alejandro', 'Alessandro', 'Alexandro', 'Alexzander', 'Alfie', 'Alfonzo', 'Alford', 'Algenis', 'Alijah', 'Alipio', 'Alistair', 'Allie', 'Allyn', 'Almond', 'Alois', 'Alonza', 'Aloysius', 'Alpha', 'Alphonse', 'Alphonso', 'Alvah', 'Alvaro', 'Alvie', 'Alxis', 'Amadeo', 'Amado', 'Amador', 'Amario', 'Amarlai', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ambrose', 'Americo', 'Amiel', 'Amil', 'Amit', 'Anakin', 'Anatoly', 'Anderson', 'Andra', 'Andreas', 'Andrey', 'Andrus', 'Anfernee', 'Angus', 'Anh', 'Anibal', 'Anirudh', 'Ankoma', 'Anselmo', 'Anson', 'Antonino', 'Antwan', 'Antwon', 'Anup', 'Anwar', 'Api', 'Apostolos', 'Aqib', 'Aramys', 'Arash', 'Arcadio', 'Archie', 'Archil', 'Aric', 'Arjun', 'Arkadiy', 'Arlan', 'Arley', 'Arlie', 'Arlis', 'Arlo', 'Armando', 'Armani', 'Armon', 'Armond', 'Arnab', 'Arnaldo', 'Arnie', 'Arnoldo', 'Arnulfo', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aron', 'Arron', 'Arsal', 'Arshad', 'Arther', 'Artie', 'Artis', 'Artur', 'Arturo', 'Arvel', 'Arvid', 'Arwin', 'Asbert', 'Aseem', 'Ashantio', 'Asher', 'Ashfaq', 'Ashton', 'Atlee', 'Atrayu', 'Atwoun', 'Audie', 'Augustus', 'Aurelio', 'Austen', 'Austin', 'Austyn', 'Avi', 'Avinav', 'Avram', 'Axel', 'Aydan', 'Ayden', 'Ayinde', 'Aylwin', 'Ayodeji', 'Ayrat', 'Ayrton', 'Abbyabbie', 'Ailsa', 'Aviva', 'Amei', 'Ahy', 'Ailing', 'Amarie', 'Ameiya', 'Aadilah', 'Aafke', 'Aaralyn', 'Aashka', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aastha', 'Abida', 'Adalyn', 'Adrianous', 'Aicha', 'Ailema', 'Aislinn', 'Aleasha', 'Alegria', 'Aleigha', 'Alethea', 'Alexiz', 'Alley', 'Alwyn', 'Amada', 'Amalie', 'Amberis', 'Anyea', 'Anadeli', 'Anaiah', 'Andee', 'Angeles', 'Angelika', 'Anneke', 'Annemarieke', 'Annemiek', 'Angelice', 'Annu', 'Aoife', 'Aoki', 'Arcelia', 'Areena', 'Ashaya', 'Ashunta', 'Aspasia', 'Assis', 'Asten', 'Audrea', 'Augustina', 'Avangaline', 'Aynur', 'Azia', 'Annzley', 'Aunjenae', 'Abeiku', 'Adin', 'Afonso', 'Afraz', 'Aidon', 'Ainsof', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Alejo', 'Alliance', 'Amadeus', 'Amine', 'Amr', 'Anastasios', 'Andijamo', 'Angoni', 'Antti', 'Arif', 'Artem', 'Asad', 'Ashwath', 'Aslan', 'Atik', 'Attah', 'Altair', 'Arnon', 'Adora', 'Aeola', 'Alleen', 'Althena', 'Amethyst', 'Albreto', 'Acher', 'Apona', 'Ardelle', 'Aura', 'Amity', 'Amon', 'Aristotle', 'Alesa', 'Alika', 'Alita', 'Akio', 'Alister', 'Almena', 'Annora', 'Alexandor', 'Aloha', 'Amina', 'Atman', 'Akako', 'Arnia', 'Arnice', 'Asisa', 'Aramis', 'Ayoka', 'Arabela', 'Atalanta', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aletheia', 'Alethia', 'Alien', 'Amigo', 'Anglie', 'Apple', 'Auguste', 'Aabagael', 'Aachbo', 'Aadam', 'Aadan', 'Aadesh', 'Aahna', 'Aailyaa', 'Aanisah', 'AdaLynn', 'Adonia', 'Ariel', 'Aba', 'Abina', 'Adalia', 'Ailis', 'Akili', 'Alanni', 'Aure ', 'Azura', 'Andres', 'Al', 'Amelie', 'Autumn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bennett', 'Bishop', 'Bradley', 'Baker', 'Bryant', 'Bryson', 'Baird', 'Baldwin', 'Barnett', 'Barry', 'Barton', 'Beck', 'Benjamin', 'Benson', 'Berg', 'Bernard', 'Bruce', 'Ballard', 'Bryan', 'Barlow', 'Baron', 'Bartley', 'Benedict', 'Brandon', 'Beverly', 'Bain', 'Bentley', 'Bancroft', 'Bart', 'Basil', 'Ben', 'Bertram', 'Bill', 'Brian', 'Billy', 'Baber', 'Bader', 'Baily', 'Bainbridge', 'Beenle', 'Barbie', 'Bubles', 'Bard', 'Barret', 'Bartholomew', 'Beacher', 'Beau', 'Berger', 'Bernie', 'Bert', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Berton', 'Bevis', 'Bing', 'Blair', 'Blithe', 'Bob', 'Booth', 'Borg', 'Boris', 'Bowen', 'Boyce', 'Boyd', 'Brady', 'Brook', 'Bruno', 'Buck', 'Burgess', 'Burke', 'Burnell', 'Burton', 'Byron', 'Barbara', 'Betty', 'Brenda', 'Bonnie', 'Beatrice', 'Bernice', 'Brittany', 'Beth', 'Bessie', 'Brandy', 'Billie', 'Becky', 'Bobbie', 'Belinda', 'Blanche', 'Beulah', 'Bridget', 'Blanca', 'Brooke', 'Bernadette', 'Betsy', 'Baal', 'Babbie', 'Babette', 'Babs', 'Babur', 'Bacchus', 'Bachelor', 'Bagot', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Baillie', 'Balaam', 'Baldie', 'Baldrick', 'Balfour', 'Babbette', 'Babsi', 'Bailee', 'Balbina', 'Baljinder', 'Balvina', 'Bambi', 'Barbaro', 'Barbra', 'Barra', 'Baseerat', 'Baylee', 'Beatriz', 'Beaulah', 'Bebe', 'Becca', 'Becci', 'Becka', 'Beena', 'Begona', 'Bekki', 'Bell', 'Bella', 'Bellamy', 'Belle', 'Belva', 'Benedicte', 'Benediz', 'Benita', 'Berenice', 'Berkeley', 'Bernadine', 'Bernardine', 'Berneice', 'Berniece', 'Bernita', 'Berta', 'Bertha', 'Bertie', 'Beryl', 'Beshaun', 'Bethel', 'Bettie', 'Bettina', 'Bettyann', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bettye', 'Beverlee', 'Beyonce', 'Bianca', 'Bibi', 'Billye', 'Bilqis', 'Bindi', 'Birdie', 'Bitch', 'Blendena', 'Blossom', 'Blythe', 'Bobbye', 'Bogusia', 'Bonita', 'Bonny', 'Bowyer', 'Brailyn', 'Branca', 'Brandee', 'Brandice', 'Brandie', 'Brandis', 'Breana', 'Breann', 'Breanna', 'Breanne', 'Bree', 'Brejai', 'Brenna', 'Breonna', 'Briana', 'Brianna', 'Brianne', 'Bridgett', 'Bridgette', 'Bridie', 'Brielle', 'Brigette', 'Brigitte', 'Brisa', 'Britany', 'Brithney', 'Britney', 'Britni', 'Brittani', 'Brittanie', 'Brittney', 'Brittni', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Brittny', 'Brogan', 'Bron', 'Bronwyn', 'Brooklynn', 'Brunilda', 'Bryana', 'Bryanna', 'Bryndan', 'Brynn', 'Bryony', 'Buelong', 'Buffy', 'Buick', 'Bulah', 'Bunni', 'Butch', 'Bahmann', 'Bama', 'Bany', 'Bao', 'Barbarino', 'Barkley', 'Barney', 'Barrett', 'Barron', 'Basel', 'Batman', 'Baxter', 'Bayden', 'Begongo', 'Bejay', 'Benio', 'Benito', 'Bennie', 'Benno', 'Benoit', 'Benton', 'Bernardo', 'Bernhard', 'Berry', 'Bertrand', 'Bertus', 'Bhavin', 'Bhinal', 'Biffo', 'Bilducia', 'Billybob', 'Bink', 'Blade', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Blaine', 'Blaise', 'Blayd', 'Blaze', 'Bodie', 'Bohao', 'Bojan', 'Bong', 'Boobs', 'Boots', 'Braden', 'Bradford', 'Bradly', 'Brado', 'Bradyn', 'Braeden', 'Braedon', 'Braiden', 'Bralin', 'Bram', 'Brandan', 'Branden', 'Brandt', 'Brandyn', 'Brannan', 'Brannon', 'Branson', 'Brant', 'Brantley', 'Braxton', 'Bray', 'Brayan', 'Brayden', 'Braydon', 'Brecken', 'Brendan', 'Brenden', 'Brendon', 'Brendt', 'Brennan', 'Brennen', 'Brennon', 'Brent', 'Brenton', 'Bret', 'Breven', 'Brice', 'Briere', 'Briggs', 'Bringle', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Broc', 'Brock', 'Brodie', 'Brody', 'Bromley', 'Brondon', 'Bronson', 'Brooks', 'Brown', 'Bruz', 'Bryce', 'Brycen', 'Bucs', 'Buda', 'Buddie', 'Buddy', 'Buford', 'Bufu', 'Bugzy', 'Burnsy', 'Beata', 'Bowie', 'Bosco', 'Bobo', 'Bondy', 'Bigs', 'Bowiet', 'Bacilio', 'Baltazar', 'Barrie', 'Bass', 'Bastian', 'Batool', 'Berend', 'Bernat', 'Bevan', 'Bimbo', 'Blayn', 'Bodhi', 'Bogdan', 'Bonifacio', 'BrayDyn', 'Brendin', 'Buster', 'Buzz', 'Babydoll', 'Bahar', 'Baukje', 'Beibei', 'Belem', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Carl', 'Carlos', 'Campbell', 'Carroll', 'Cole', 'Coleman', 'Caiden', 'Charles', 'Cain', 'Caldwell', 'Carlson', 'Carver', 'Clay', 'Clayton', 'Collier', 'Chloe', 'Chase', 'Cecil', 'Christopher', 'Clifford', 'Cornelius', 'Christy', 'Christie', 'Calvert', 'Carmichael', 'Cartwright', 'Cary', 'Cassidy', 'Castle', 'Chadwick', 'Chamberlain', 'Chappell', 'Clinton', 'Connor', 'Colton', 'Clyde', 'Carman', 'Celestine', 'Charley', 'Charlie', 'Columbus', 'Cory', 'Carson', 'Christal', 'Colorfully', 'Caesar', 'Calvin', 'Carey', 'Carr', 'Carter', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cash', 'Cedric', 'Chad', 'Channing', 'Chapman', 'Chasel', 'Chester', 'Christ', 'Clare', 'Clarence', 'Clark', 'Claude', 'Clement', 'Cleveland', 'Cliff', 'Colbert', 'Colby', 'Colin', 'Conrad', 'Cornell', 'Craig', 'Curitis', 'Cyril', 'Carol', 'Cynthia', 'Carolyn', 'Christine', 'Catherine', 'Cheryl', 'Christina', 'Crystal', 'Connie', 'Carmen', 'Cindy', 'Carrie', 'Charlotte', 'Clara', 'Cathy', 'Carla', 'Colleen', 'Constance', 'Claudia', 'Courtney', 'Caroline', 'Cassandra', 'Carole', 'Claire', 'Cora', 'Cecilia', 'Candace', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Candice', 'Cell', 'Chelsea', 'Cristina', 'Cecelia', 'Camille', 'Camilla', 'Catharine', 'Cecily', 'Chanel', 'Chauncey', 'Chuck', 'Cicely', 'Cinderella', 'Claudette', 'Claudine', 'Cleopatra', 'Colette', 'Collen', 'Candance', 'Cybelle', 'Cholena', 'Carlita', 'Carlina', 'Conan', 'Caton', 'Cleon', 'Cowan', 'Camey', 'Carling', 'Carmine', 'Carmelle', 'Cydney', 'Coryana', 'Corrinne', 'Cisca', 'Chynna', 'Chit', 'Cheyli', 'Cheree', 'Charysse', 'Chardonnay', 'Chapin', 'Cerys', 'Cequoyah', 'Celicia', 'Catlyn', 'Cathriona', 'Carys', 'Cammie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Camelot', 'Calantha', 'Cully', 'Cs', 'Constantine', 'Claus', 'Ciro', 'Cheo', 'Chelito', 'Cheech', 'Charsity', 'Charisma', 'Channa', 'Celtic', 'Celerino', 'Cassen', 'Cabot', 'Cabian', 'Cherrie', 'Chet', 'Chilam', 'Cosmo', 'Cheney', 'Corrine', 'Cloris', 'Cyrus', 'Cvetan', 'Curtis', 'Cullen', 'Ctace', 'Crow', 'Cristopher', 'Cristobal', 'Crispin', 'Crew', 'Cretcher', 'Creed', 'Creana', 'Cote', 'Cortez', 'Corjan', 'Cordell', 'Cooper', 'Conway', 'Conor', 'Conner', 'Colten', 'Colt', 'Colson', 'Colm', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cold', 'Codi', 'Cobby', 'Clio', 'Clifton', 'Claudio', 'Cisco', 'Chuckie', 'Chub', 'Christoper', 'Chokko', 'Chock', 'Chippy', 'Chico', 'Chesley', 'Chesdarith', 'Chechu', 'Chaz', 'Charalambos', 'Chandre', 'Chance', 'Chakiris', 'Chaim', 'Chadd', 'Cevin', 'Cesar', 'Cem', 'Celso', 'Cein', 'Cayden', 'Catlin', 'Cassio', 'Casper', 'Caspar', 'Carlyle', 'Carlton', 'Cantrell', 'Camron', 'Camren', 'Camden', 'Callum', 'Callan', 'Caleb', 'Cairns', 'CJ', 'Cyndy', 'Cyndi', 'Cristie', 'Cristiane', 'Cristal', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Crissy', 'Cosette', 'Corrie', 'Cornelia', 'Corliss', 'Corinne', 'Corinna', 'Corine', 'Corina', 'Corene', 'Cordie', 'Cordia', 'Cordelia', 'Corcoran', 'Coral', 'Consuelo', 'Conceicao', 'Collette', 'Coleen', 'Cloe', 'Cleta', 'Cleora', 'Clemmie', 'Clementine', 'Clementina', 'Clarissa', 'Clarine', 'Clarice', 'Claribel', 'Citlalli', 'Circe', 'Cinzia', 'Cindi', 'Cinda', 'Cierra', 'Ciera', 'Cielo', 'Ciarra', 'Ciara', 'Chyna', 'Chrystyna', 'Chrystal', 'Christiana', 'Christene', 'Christel', 'Christeen', 'Chrissy', 'Chiquita', 'Chiara', 'Chianti', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cheyenne', 'Cheyanne', 'Cheryle', 'Cherri', 'Cherise', 'Cherie', 'Chenille', 'Chelsie', 'Chelsi', 'Chaya', 'Chastity', 'Chasity', 'Chasidy', 'Charolette', 'Charmaine', 'Charly', 'Charlize', 'Charline', 'Charleen', 'Charla', 'Charisse', 'Charissa', 'Chantelle', 'Chantel', 'Chante', 'Chantal', 'Chaney', 'Chandi', 'Chanda', 'Chana', 'Celine', 'Celinda', 'Celina', 'Celica', 'Celia', 'Celeste', 'Celena', 'Ceanna', 'Caylin', 'Cayla', 'Catrina', 'Catina', 'Catia', 'Cathryn', 'Cathrine', 'Cathleen', 'Cathie', 'Cathi', 'Cathey', 'Caterina', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Catarina', 'Catalina', 'Cassius', 'Cassie', 'Cassia', 'Casandra', 'Caryn', 'Caryl', 'Caron', 'Carolynn', 'Carolina', 'Carolee', 'Carolann', 'Carmella', 'Carmelita', 'Carmela', 'Carlyn', 'Carlye', 'Carly', 'Carlotta', 'Carlie', 'Carli', 'Carley', 'Carlene', 'Carleen', 'Carlee', 'Carissa', 'Carisa', 'Caris', 'Carina', 'Carie', 'Cari', 'Caren', 'Careen', 'Cara', 'Candis', 'Candida', 'Camila', 'Camellia', 'Callie', 'Calli', 'Calista', 'Caleigh', 'Caitlynn', 'Caitlyn', 'Caitlin', 'Cailyn', 'Cady', 'Candy', 'Cassiel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Clint', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Davis', 'Dick', 'Duncan', 'Dunn', 'Daniel', 'David', 'Dean', 'Dennis', 'Douglas', 'Duke', 'Dalton', 'Davidson', 'Dillon', 'Donovan', 'Dorsey', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duran', 'Dyer', 'Dempsey', 'Derrick', 'Daly', 'Darby', 'Davies', 'Denny', 'Dewey', 'Doherty', 'Donnelly', 'Douglass', 'Drummond', 'Duff', 'Dunbar', 'Dunham', 'Dan', 'Diana', 'Don', 'Delia', 'Damon', 'Dane', 'Darwin', 'Deane', 'Desmond', 'Domingo', 'Dreamy', 'Darcy', 'Darnell', 'Darren', 'Dave', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Devin', 'Dominic', 'Donahue', 'Donald', 'Drew', 'Dwight', 'Dylan', 'Dorothy', 'Donna', 'Deborah', 'Debra', 'Diane', 'Doris', 'Denise', 'Dawn', 'Debbie', 'Danielle', 'Dolores', 'Delores', 'Dora', 'Deanna', 'Dianne', 'Daisy', 'Della', 'Dianna', 'Doreen', 'Desiree', 'Darla', 'Dixie', 'Danny', 'Dante', 'Daphne', 'Darcey', 'Davina', 'Debby', 'Deirdre', 'Delilah', 'Derek', 'Dinah', 'Dione', 'Dirk', 'Dolly', 'Dorothea', 'Diego', 'Dobias', 'Dmitry', 'Dirceu', 'Diogo', 'Dimitri', 'Dimigy', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Dillan', 'Diallo', 'Dexter', 'Devonte', 'Devic', 'Devendra', 'Devante', 'Deshawn', 'Deshaun', 'Derwin', 'Derron', 'Derrell', 'Dermot', 'Derico', 'Derick', 'Dereck', 'Derald', 'Deontrae', 'Deonte', 'Deondre', 'Denzel', 'Denton', 'Denicio', 'Demontay', 'Demetrius', 'DeMarcus', 'Delon', 'Delbert', 'Delano', 'Dejohn', 'Dejan', 'Deekay', 'Dedric', 'Declan', 'Decarlos', 'Debelen', 'Deaux', 'Deangelo', 'Deandre', 'Deakin', 'Dazz', 'Daylyn', 'Davy', 'Davonte', 'Davon', 'Davion', 'Daunte', 'Dathan', 'Dashul', 'Dashawn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Darryl', 'Darrow', 'Darrold', 'Darrius', 'Darrion', 'Darrin', 'Darrell', 'Darran', 'Darragh', 'Darion', 'Dario', 'Darin', 'Daren', 'Daquan', 'Danilo', 'Dangelo', 'Dandre', 'Damir', 'Damion', 'Damien', 'Damian', 'Damacio', 'Daimonn', 'Dacio', 'D baggio', 'D artagnan', 'Dyana', 'Dulce', 'Dottie', 'Dorie', 'Dominica', 'Dodie', 'Divine', 'Diedre', 'Destiny', 'Destini', 'Destiney', 'Destinee', 'Despina', 'Desirae', 'Denisse', 'Denine', 'Denali', 'Dena', 'Demetria', 'Delrae', 'Delma', 'Delisa', 'Deja', 'Deidre', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Deepa', 'Deena', 'Deedee', 'Deeann', 'Dedra', 'Debrah', 'Debi', 'Debera', 'Debbra', 'Deasia', 'Deanne', 'Deana', 'Dayna', 'Dayana', 'Dawna', 'Dasia', 'Darline', 'Darlene', 'Darleen', 'Daria', 'Darcie', 'Darci', 'Darchelle', 'Danyelle', 'Danna', 'Danita', 'Daniella', 'Daniela', 'Danica', 'Dania', 'Danette', 'Danelle', 'Danae', 'Damita', 'Damia', 'Damaris', 'Damali', 'Dalina', 'Dalia', 'Dalal', 'Daisha', 'Daina', 'Dagny', 'Dafne', 'Domenic', 'Domingos', 'Dominick', 'Dominik', 'Donavan', 'Donjite', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Donnie', 'Donte', 'Doron', 'Dougie', 'Draco', 'Draven', 'Drayden', 'Duane', 'Duarte', 'Duchenka', 'Dude', 'Durbin', 'Durron', 'Durward', 'Dustin', 'Duy', 'Dwayne', 'Dyante', 'Dylano', 'Dyllan', 'Dylon', 'Dextrad', 'Dicky', 'Delphine', 'Deanie', 'Dartagnan', 'Dbaggio', 'Dkasey', 'Dmarco', 'Daan', 'Daeden', 'Daio', 'Daron', 'Daymond', 'Dejesus', 'Delton', 'Delvin', 'Demond', 'Denizcan', 'Deundre', 'Devlin', 'Dharmesh', 'Dignus', 'Dimosthenes', 'Dreagon', 'Duba', 'Dadgy', 'Dadjiana', 'Daneel', 'Danitza', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Danuta', 'Dartainya', 'Daviyana', 'Dawnielle', 'Dequanna', 'Demara', 'Dennah', 'Desta', 'Devianna', 'Diandra', 'Djana', 'Dolors', 'Donita', 'Dreama', 'Dulcey', 'Dylisia', 'Deacon', 'Delmar', 'Derrica', 'Deniece', 'Doran', 'Duman', 'Dusan', 'Darrick', 'Dagna', 'Darah', 'Doug', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Emma', 'Ellis', 'Edith', 'Elliott', 'Ethan', 'Eaton', 'Everett', 'Edgar', 'Elliot', 'Early', 'Eddy', 'Edmond', 'Egan', 'Elias', 'Ellsworth', 'Elmore', 'Emery', 'Engle', 'Ennis', 'Ernst', 'Ervin', 'Erwin', 'Elmer', 'Elton', 'Emmanuel', 'Enoch', 'Ernest', 'Eugene', 'Evan', 'Evelyn', 'Elisa', 'Earle', 'Eddie', 'Elbert', 'Elwood', 'Emanuel', 'Emmett', 'Emory', 'Erlinda', 'Earl', 'Ed', 'Eden', 'Edmund', 'Edison', 'Edward', 'Edwiin', 'Egbert', 'Elijah', 'Elroy', 'Elvis', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Eric', 'Everley', 'Elizabeth', 'Emily', 'Edna', 'Ethel', 'Ellen', 'Elaine', 'Esther', 'Eva', 'Eleanor', 'Erin', 'Erica', 'Elsie', 'Eileen', 'Ella', 'Erika', 'Eunice', 'Erma', 'Ernestine', 'Elena', 'Estelle', 'Eloise', 'Elvira', 'Essie', 'Elsa', 'Ebony', 'Eda', 'Edwin', 'Effie', 'Eleanora', 'Eleanore', 'Elfreda', 'Elin', 'Elinor', 'Elisabeth', 'Elise', 'Elisha', 'Elissa', 'Ellie', 'Elma', 'Elmo', 'Eloisa', 'Else', 'Elva', 'Elvin', 'Emeline', 'Emerald', 'Emile', 'Emilia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Emmie', 'Emmitt', 'Ena', 'Enid', 'Ernie', 'Errol', 'Eve', 'Ebone', 'Eboni', 'Edwige', 'Edwina', 'Edyth', 'Eira', 'Ekaterina', 'Elaina', 'Elba', 'Elda', 'Eleni', 'Eleonore', 'Eleri', 'Elexis', 'Eliana', 'Eliane', 'Elina', 'Elke', 'Elora', 'Elvia', 'Elvina', 'Elysa', 'Elyse', 'Elyssa', 'Emely', 'Emilee', 'Emileigh', 'Emilie', 'Emmalee', 'Emmanuelle', 'Emmy', 'Emogene', 'Enola', 'Enriqueta', 'Enya', 'Eranthe', 'Ericka', 'Erlene', 'Erna', 'Eryn', 'Esin', 'Esmee', 'Esmeralda', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Esperanza', 'Essence', 'Estefania', 'Ester', 'Estrella', 'Evelia', 'Eveline', 'Evelyne', 'Evgenia', 'Evie', 'Ej', 'Eamon', 'Ean', 'Easton', 'Eben', 'Edgardo', 'Edson', 'Eduardo', 'Edzel', 'Eelko', 'Efrain', 'Efren', 'Eldad', 'Eleazar', 'Elie', 'Eliezer', 'Eliseo', 'Emiliano', 'Emilio', 'Emir', 'Enrico', 'Erasmo', 'Ercilien', 'Erickzon', 'Erkan', 'Ernesto', 'Esko', 'Eslie', 'Esteban', 'Estevan', 'Eurico', 'Eusebio', 'Everardo', 'Evin', 'Ewald', 'Ewan', 'Eyal', 'Eyron', 'Ezekiel', 'Ezequiel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ezra', 'Eudora', 'Endy', 'Eking', 'Evonne', 'Einar', 'Elco', 'Elden', 'Eldi', 'Eldian', 'Elric', 'Eluid', 'Engel', 'Enio', 'Enzo', 'Ermali', 'Esai', 'Evander', 'Evans', 'Evert', 'Ezro', 'Elahe', 'Elantra', 'Eleissa', 'Elida', 'Elysse', 'Emine', 'Enrica', 'Evangelia', 'Evangelina', 'Everlidis', 'Egon', 'Edda', 'Eagan', 'Edeline', 'Eugenia', 'Elson', 'Elston', 'Eula', 'Eric', 'Enrique', 'Earnest', 'Erick', 'Emelia', 'Evelynn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ford', 'Franklin', 'Fisher', 'Foster', 'Freeman', 'Frederica', 'Fitch', 'Fitzgerald', 'Francis', 'Frank', 'Farley', 'Farrell', 'Finley', 'Fleming', 'Fletcher', 'Flynn', 'Fowler', 'Franco', 'Frazier', 'Frost', 'Fuller', 'Fulton', 'Floyd', 'Frederick', 'Felix', 'Farrar', 'Faust', 'Felton', 'Field', 'Finn', 'Flint', 'Forbes', 'Fraser', 'Frey', 'Fritz', 'Funk', 'Forrest', 'Fabian', 'Flora', 'Freda', 'Faith', 'Felice', 'Fernando', 'Fairy', 'Flower', 'Ferdinand', 'Frederic', 'Florence', 'Felicia', 'Faye', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Fannie', 'Farrah', 'Fernanda', 'Flavia', 'Francesca', 'Freddie', 'Freddy', 'Frieda', 'Fabiana', 'Fabiola', 'Faline', 'Fallon', 'Farah', 'Farisa', 'Fatima', 'Fayetta', 'Febe', 'Felecia', 'Felicity', 'Femke', 'Ffion', 'Filipa', 'Fiona', 'Florine', 'Francine', 'Freya', 'Frida', 'Fritzi', 'Fabrice', 'Fabrizio', 'Facundo', 'Fahad', 'Fahim', 'Faizal', 'Fajar', 'Farhaad', 'Federico', 'Feicien', 'Felipe', 'Filimon', 'Filipe', 'Flavio', 'Flemming', 'Flex', 'Florentino', 'Florian', 'Follis', 'Fortunato', 'Francisco', 'Francois', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Frans', 'Franz', 'Fredrick', 'Fredy', 'Freestone', 'Frery', 'Fanny', 'Fermin', 'Finlay', 'Fadwa', 'Fawne', 'Faye', 'Filomena', 'Fleur', 'Floor', 'Flory', 'Francisca', 'Franka', 'Frosina', 'Fremont', 'Fontane', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Gordon', 'Gibson', 'Graham', 'Grant', 'George', 'Gilbert', 'Giles', 'Griffith', 'Guy', 'Gregory', 'Gallagher', 'Galloway', 'Garrett', 'Garrison', 'Greer', 'Guzman', 'Grayson', 'Gabriel', 'Gary', 'Gavin', 'Grover', 'Grace', 'Gage', 'Garnett', 'Godfrey', 'Godwin', 'Gore', 'Granger', 'Gregg', 'Gunter', 'Gabriella', 'Gerald', 'Gloria', 'Gayle', 'Garfield', 'Garth', 'Gerard', 'Gerry', 'Gillian', 'Glinda', 'Greenle', 'Gale', 'Geoffrey', 'Geoff', 'Glenn', 'Godfery', 'Greg', 'Gregary', 'Gustave', 'Gladys', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Geraldine', 'Gertrude', 'Gina', 'Georgia', 'Glenda', 'Gwendolyn', 'Geneva', 'Genevieve', 'Ginger', 'Gretchen', 'Gwen', 'Galen', 'Gaye', 'Gemma', 'Georgie', 'Germaine', 'Giovanna', 'Goldie', 'Greta', 'Gwyneth', 'Garrick', 'Gabriela', 'Gabrielle', 'Gaby', 'Gaia', 'Galilea', 'Genesis', 'Genica', 'Genna', 'Georgette', 'Georgina', 'Gerri', 'Gia', 'Giada', 'Gianna', 'Gigi', 'Gilda', 'Gilmore', 'Giorgia', 'Gisela', 'Giselle', 'Gisselle', 'Giulietta', 'Glory', 'Glynis', 'Goldia', 'Gracie', 'Graciela', 'Gretel', 'Griselda', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Gaelen', 'Gaetan', 'Gaige', 'Galo', 'Gambit', 'Gareth', 'Garett', 'Garic', 'Garon', 'Garry', 'Garza', 'Gaston', 'Gaven', 'Gavyn', 'Genaro', 'Geraldo', 'Gerardo', 'Gerasimos', 'Gerd', 'German', 'Gezi', 'Ghenadie', 'Giam', 'Giancarlo', 'Gianfranco', 'Gideon', 'Gijs', 'Gilberto', 'Gino', 'Giovani', 'Giovanni', 'Giovanny', 'Gligorea', 'Gman', 'Goncalo', 'Gonzalo', 'Gradus', 'Grady', 'Grandberry', 'Graydon', 'Greydon', 'Greyson', 'Grondall', 'Guero', 'Guilherme', 'Guillermo', 'Gunnar', 'Gunner', 'Gurneev', 'Guru', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Gustavo', 'Gyue', 'Gallen', 'Gabry', 'Gannon', 'Gap', 'Garvie', 'Geordie', 'Gezinus', 'Gizmo', 'Goran', 'Grolsch', 'Guillaume', 'Gunga', 'Gabreann', 'Gayaneh', 'Gaynor', 'Gea', 'Genie', 'Gennalee', 'Georgiann', 'Georgianna', 'Gerly', 'Giganni', 'Ginny', 'Gonnie', 'Gozde', 'Graciana', 'Gulsah', 'Gundela', 'Gypsy', 'Gita', 'Goldwin', 'Glen', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Isabella', 'Isla', 'Ingram', 'Isaac', 'Inman', 'Irvin', 'Irving', 'Irwin', 'Israel', 'Ivory', 'Ivy', 'Icey', 'Ian', 'Ingemar', 'Ira', 'Isidore', 'Ivan', 'Ives', 'Irene', 'Ida', 'Irma', 'Isabel', 'Iris', 'Inez', 'Ike', 'Ileana', 'Ilse', 'Imogene', 'Ines', 'Ingeborg', 'Inger', 'Ingrid', 'Iona', 'Isadora', 'Isaiah', 'Isis', 'Ismael', 'Ishtar', 'Iesha', 'Ilene', 'Iliana', 'Ilona', 'Imelda', 'Ina', 'India', 'Inka', 'Inmaculada', 'Iola', 'Irine', 'Irit', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jackson', 'Johnson', 'James', 'Jeanne', 'Joyce', 'Jarvis', 'Jefferson', 'Jacob', 'Jeffrey', 'John', 'Julian', 'Joy', 'Jacques', 'Jameson', 'Jarrett', 'Jeffery', 'Jewell', 'Jordon', 'Jace', 'Jessie', 'Jason', 'Jay', 'Jerry', 'Jim', 'Jonas', 'Joshua', 'Julius', 'Justin', 'Judy', 'June', 'Jeannie', 'Jose', 'Joe', 'Jayne', 'Jesus', 'Jone', 'Johnny', 'Jase', 'Jodie', 'Janice', 'Jack', 'Jared', 'Jeff', 'Jeremy', 'Jerome', 'Jonathan', 'Joseph', 'Jennifer', 'Jessica', 'Janet', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Julie', 'Joan', 'Judith', 'Jane', 'Jacqueline', 'Julia', 'Josephine', 'Juanita', 'Joanne ', 'Jill', 'Joann', 'Jeanette', 'Jo', 'Jennie', 'Jenny', 'Joanna', 'Jodi', 'Janie', 'Juana', 'Jeannette', 'Jacquelyn', 'Johnnie', 'Jasmine', 'Jana', 'Jenna', 'Josefina', 'Johanna', 'Jaime', 'Juan', 'Jacquetta', 'Jake', 'Janetta', 'Janey', 'Jaqueline', 'Jarred', 'Jarrod', 'Jed', 'Jeffry', 'Jenifer', 'Jerrold', 'Jewel', 'Jillian', 'Jimmie', 'Jimmy', 'Jocelyn', 'Joel', 'Joie', 'Jonah', 'Josiah', 'Josie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'JJ', 'Jaana', 'Jacalyn', 'Jacinda', 'Jackeline', 'Jacklyn', 'Jaclyn', 'Jacobi', 'Jadzia', 'Jaida', 'Jailyn', 'Jakayla', 'Jalyn', 'Jalynn', 'Janae', 'Janaya', 'Janeen', 'Janelle', 'Janessa', 'Janette', 'Janine', 'Janneke', 'Jasmina', 'Jasmyn', 'Jaycee', 'Jayda', 'Jayde', 'Jaye', 'Jayla', 'Jaylah', 'Jayna', 'Jazlyn', 'Jazmin', 'Jazmine', 'Jazmyn', 'Jazmyne', 'Jeanna', 'Jeannine', 'Jelena', 'Jena', 'Jenelle', 'Jenessa', 'Jennessa', 'Jeri', 'Jerri', 'Jerrica', 'Jerrie', 'Jerusha', 'Jesseka', 'Jessenia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jet', 'Jia', 'Jihan', 'Jimena', 'Joana', 'Joelle', 'Johana', 'Johnna', 'Jolanda', 'Joleen', 'Jolene', 'Jolie', 'Joni', 'Jonna', 'Jordana', 'Josalyn', 'Joselyn', 'Journey', 'Juliana', 'Julianna', 'Julianne', 'Juliet', 'Juliette', 'Julissa', 'Justina', 'Justyna', 'Jc', 'Jd', 'Jr', 'Jabari', 'Jacen', 'Jacoby', 'Jadon', 'Jaeden', 'Jagger', 'Jaheim', 'Jailen', 'Jaimel', 'Jair', 'Jairo', 'Jaison', 'Jakob', 'Jakobe', 'Jakyri', 'Jaleel', 'Jalon', 'Jamar', 'Jamarcus', 'Jamari', 'Jamel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jamesie', 'Jamielee', 'Jamil', 'Jaquan', 'Jarell', 'Jaren', 'Jari', 'Jarkko', 'Jarne', 'Jarno', 'Jarod', 'Jarom', 'Jaron', 'Jarryd', 'Jasen', 'Jatari', 'Jatavion', 'Jaume', 'Javarri', 'Javed', 'Javen', 'Javier', 'Javion', 'Javon', 'Jaxon', 'Jaxson', 'Jaydon', 'Jaylan', 'Jayleke', 'Jaylen', 'Jaylon', 'Jayson', 'Jayzon', 'Jeanluc', 'Jehovah', 'Jenito', 'Jenrry', 'Jequil', 'Jeren', 'Jermey', 'Jeroen', 'Jeruh', 'Jessy', 'Jethro', 'Jett', 'Jevandyr', 'Jevon', 'Jianzhong', 'Jide', 'Jimi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jinks', 'Jjon', 'Josavion', 'Joachim', 'Joao', 'Joaquin', 'Jocke', 'Johansen', 'Johnathan', 'Johnathon', 'Johnno', 'Joker', 'Jomar', 'Jonathon', 'Jonny', 'Joost', 'Jorden', 'Jordy', 'Jorge', 'Jorgen', 'Joris', 'Jorne', 'Josue', 'Jothy', 'Joure', 'Jovan', 'Jovani', 'Jovanny', 'Jovany', 'Jovino', 'Jsonin', 'Judah', 'Juergen', 'Jujuan', 'Julien', 'Julio', 'Junior', 'Justus', 'Jyrikc', 'Jenny jennie', 'Jacky', 'Jabe', 'Jabriel', 'Jaiah', 'Jamahd', 'Jamo', 'Jamychal', 'Jarin', 'Jassir', 'Javarion', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Javu', 'Jawara', 'Jaxom', 'Jaymz', 'Jeandre', 'Jelani', 'Jelle', 'Jemario', 'Jenks', 'Jentrey', 'Jeordie', 'Jerold', 'Jeronimo', 'Jerrell', 'Jerrod', 'Jesper', 'Jestek', 'Jevaris', 'Jobon', 'Joelo', 'Johntify', 'Jono', 'Joop', 'Joran', 'Jorben', 'Joslain', 'Jostin', 'Josuan', 'Joven', 'Juca', 'Judd', 'Jbreauna', 'Jacarri', 'Jacinta', 'Jadi', 'Jadmalys', 'Jaduiga', 'Jahmilia', 'Jahnae', 'Jaialea', 'Jakerra', 'Jaleesa', 'Jamisen', 'Janai', 'Jandi', 'Janela', 'Janique', 'Janira', 'Jannemarij', 'Jannery', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jarrisha', 'Jasmynne', 'Jaygee', 'Jaynie', 'Jazdia', 'Jeanique', 'Jemila', 'Jenae', 'Jenai', 'Jenan', 'Jenine', 'Jennine', 'Jeralyn', 'Jermeka', 'Jerzie', 'Jimmia', 'Jinette', 'Jitske', 'Joneshia', 'Jonlys', 'Jonneke', 'Jordanne', 'Jordi', 'Jovelynn', 'Jowanna', 'Jarda', 'Jerica', 'Juliane', 'Joycelyn', 'Joline', 'Jamila', 'Jonina', 'Jocasta', 'Jeanie', 'Jerod', 'Jammy', 'Jannet', 'Jessey', 'Jingle', 'Jiro', 'Jacko', 'Jyotsna', 'Jam Hsiao', 'Joliet', 'Jon', 'Jeremiah', 'Jerald', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'King', 'Kevin', 'Kelley', 'Knight', 'Khaleesi', 'Kent', 'Kerr', 'Kirk', 'Keith', 'Kane', 'Kemp', 'Key', 'Kirby', 'Klein', 'Knox', 'Kyle', 'Kay', 'Kearney', 'Keen', 'Kendrick', 'Kenney', 'Kenny', 'Kern', 'Kimbrough', 'Kincaid', 'Kinsey', 'Kirkland', 'Karl', 'Kaye', 'Ken', 'Kennedy', 'Kenneth', 'Kerwin', 'Karen', 'Kathleen', 'Katherine', 'Kathy', 'Kathryn', 'Katie', 'Kristen', 'Kristin', 'Kristina', 'Katrina', 'Kayla', 'Kristine', 'Kristy', 'Kelli', 'Kara', 'Krista', 'Kendra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Krystal', 'Kari', 'Kerry', 'Kate', 'Kellie', 'Kristie', 'Kaley', 'Karan', 'Karin', 'Karla', 'Karol', 'Katharine', 'Kathie', 'Katy', 'Keely', 'Kelvin', 'Kendal', 'Kenna', 'Kenton', 'Kenyatta', 'Kermit', 'Kimberley', 'Kimberly', 'Kirsten', 'Kit', 'Kittie', 'Kitty', 'Kennard', 'Kaitlyn', 'Kiara', 'Kaci', 'Kacie', 'Kaela', 'Kaelyn', 'Kaia', 'Kail', 'Kaila', 'Kailee', 'Kailey', 'Kailyn', 'Kaitlan', 'Kaitleen', 'Kaitlin', 'Kaitlynn', 'Kaiya', 'Kajal', 'Kala', 'Kaleigh', 'Kaliyah', 'Kallie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kalyn', 'Kamryn', 'Kandi', 'Kandie', 'Karel', 'Karima', 'Karina', 'Karis', 'Karissa', 'Karlee', 'Karlene', 'Karley', 'Karli', 'Karlie', 'Karly', 'Karma', 'Karolyn', 'Karyn', 'Kasandra', 'Kasi', 'Kasia', 'Kassandra', 'Kassidy', 'Katarina', 'Katelin', 'Katelyn', 'Katelynn', 'Katerina', 'Katia', 'Katina', 'Katja', 'Katrien', 'Katya', 'Kaya', 'Kaylah', 'Kaylee', 'Kayleigh', 'Kayley', 'Kayli', 'Kaylie', 'Kaylyn', 'Kaylynn', 'Keanna', 'Keara', 'Keila', 'Keisha', 'Kelsi', 'Kelsie', 'Kenia', 'Kerenza', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kerrie', 'Kerstin', 'Keshia', 'Keyanna', 'Keyara', 'Keyla', 'Kezia', 'Khadijah', 'Khalifa', 'Kiana', 'Kiandra', 'Kianna', 'Kiera', 'Kierra', 'Kiersten', 'Kiki', 'Kiley', 'Kimora', 'Kira', 'Kiri', 'Kirima', 'Kirsteen', 'Kirsty', 'Kora', 'Kori', 'Krischelle', 'Kristan', 'Kristyn', 'Krystina', 'Krystle', 'Ksenia', 'Kusum', 'Kya', 'Kyla', 'Kylee', 'Kyleigh', 'Kyra', 'Kyung', 'Kaden', 'Kage', 'Kahill', 'Kaleb', 'Kaleija', 'Kalon', 'Kalvin', 'Kamph', 'Kamron', 'Kanan', 'Kareem', 'Karisma', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Karry', 'Karson', 'Kashif', 'Kavaljit', 'Kavon', 'Kayden', 'Kayin', 'Kazi', 'Keagan', 'Kealoha', 'Keegan', 'Keenan', 'Keian', 'Keiran', 'Kelon', 'Kelton', 'Kenan', 'Kenori', 'Kensy', 'Keon', 'Keong', 'Kershwyn', 'Kert', 'Keshaun', 'Keshawn', 'Keven', 'Kevon', 'Keyon', 'Keyshawn', 'Khai', 'Khail', 'Khalid', 'Khalil', 'Khaliq', 'Khurram', 'Kiddo', 'Kiel', 'Kingsley', 'Kip', 'Kittisak', 'Koa', 'Kobe', 'Koby', 'Kodi', 'Kody', 'Kohan', 'Kolby', 'Kole', 'Kondi', 'Konstantin', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Koos', 'Korbin', 'Korey', 'Korrigan', 'Kortez', 'Koyzell', 'Kraig', 'Kralin', 'Kristofer', 'Kristopher', 'Kurt', 'Kurtis', 'Kurtisrae', 'Kwadir', 'Kye', 'Kylan', 'Kyo', 'Kyree', 'Kyros', 'Karida', 'Kathykathie', 'Kaykaye', 'Kishi', 'Keving', 'Kennybee', 'Kenji', 'Kaimen', 'Karwai', 'Karena', 'Kadeem', 'Kaedyn', 'Kalem', 'Karteous', 'Kavir', 'Kc', 'Kedren', 'Kees', 'Keifer', 'Kepuhi', 'Ketan', 'Khari', 'Kieron', 'Kimmo', 'Kio', 'Kiril', 'Kirsanoff', 'Kirt', 'Kitrick', 'Knud', 'Koen', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kosta', 'Kyren', 'Kimoni', 'Kaeley', 'Kaisha', 'Kajsa', 'Kameo', 'Kamla', 'Kanequa', 'Karenah', 'Karice', 'Karinda', 'Karine', 'Kariyah', 'Kariz', 'Karlyn', 'Karyssa', 'Katrianna', 'Kaula', 'Kawana', 'Kaylia', 'Kearen', 'Keilani', 'Keita', 'Kenlyn', 'Kennisis', 'Kersha', 'Khailene', 'Khloe', 'Kiany', 'Kilianne', 'Kimmy', 'Kinty', 'Kinza', 'Kirri', 'Kirstie', 'Kourtlyn', 'Kramie', 'Kristal', 'Kristiina', 'Krystani', 'Krysten', 'Kyanna', 'Kysharnie', 'Kadar', 'Kamea', 'Kimi', 'Kisa', 'Keli', 'Kayne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kado', 'Kerk', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lewis', 'Lawrence', 'Lilith', 'Larissa', 'Lambert', 'Leonard', 'Lester', 'Lora', 'Lang', 'Lara', 'Larson', 'Leon', 'Lloyd', 'Lucas', 'Lance', 'Louis', 'Luther', 'Lyle', 'Lacey', 'Lacy', 'Ladd', 'Laird', 'Lange', 'Langston', 'Larkin', 'Latham', 'Lawler', 'Lay', 'Layne', 'Layton', 'Libby', 'Lilly', 'Lincoln', 'Linn', 'Landon', 'Liam', 'Lorenzo', 'Larry', 'Leo', 'Levi', 'Lucy', 'Lillie', 'Lamont', 'Laurence', 'Leland', 'Lenard', 'Leroy', 'Luis', 'Leif', 'Len', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennon', 'Leopold', 'Les', 'Lionel', 'Lucien', 'Lyndon', 'Linda', 'Lisa', 'Laura', 'Lori', 'Louise', 'Lois', 'Lillian', 'Lucille', 'Lauren', 'Lorraine', 'Loretta', 'Laurie', 'Lydia', 'Lena', 'Leah', 'Leona', 'Lindsey', 'Lindsay', 'Lynda', 'Luz', 'Lula', 'Lola', 'Latoya', 'Lynne', 'Leticia', 'Lynette', 'Laverne', 'Lorena', 'Lila', 'Lana', 'Lorene', 'Lucia', 'Lela', 'Lanny', 'Latonia', 'Laurel', 'Lauretta', 'Laurinda', 'Lavinia', 'Lean', 'Leda', 'Leila', 'Leilani', 'Lemuel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennie', 'Lenny', 'Lenora', 'Lenore', 'Leonie', 'Leonora', 'Leonore', 'Letitia', 'Lettie', 'Letty', 'Lili', 'Lily', 'Lina', 'Lindy', 'Linsey', 'Ladonna', 'Lashay', 'Lachelle', 'Lacie', 'Laila', 'Laine', 'Lainey', 'Lakeisha', 'LaKeydra', 'Lakita', 'Lal', 'Laney', 'Lanita', 'LaQuisha', 'Laquita', 'Larisa', 'Latifah', 'Latika', 'Latina', 'Latisha', 'Latricia', 'Lauran', 'Laureen', 'Lauryn', 'Lavina', 'Lavon', 'Lavonne', 'Lawanda', 'Layla', 'Layna', 'Leann', 'Leala', 'Leandra', 'Leanna', 'Leanne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leeann', 'Leesa', 'Leia', 'Leisa', 'Leisha', 'Leota', 'Lesly', 'Lexi', 'Lexie', 'Lia', 'Lian', 'Liana', 'Liang', 'Lianne', 'Lida', 'Lidia', 'Liliana', 'Lilliana', 'Limei', 'Linaeve', 'Linnea', 'Linnie', 'Lisandra', 'Lisette', 'Lita', 'Litzy', 'Liz', 'Liza', 'Lizabeth', 'Lizbeth', 'Lizeth', 'Lizette', 'Lizzie', 'Lolita', 'Loma', 'Lona', 'Lorenza', 'Lorinda', 'Lorna', 'Lorrie', 'Lotte', 'Lottie', 'Louisa', 'Lourdes', 'Luana', 'Lucija', 'Lucinda', 'Ludmila', 'Lulu', 'Luna', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lupita', 'Lurdes', 'Lux', 'Lyna', 'Lyndi', 'Lynnette', 'Lynsey', 'Lacorey', 'Laithan', 'Lamar', 'Lampros', 'Lardy', 'Latrell', 'Lawther', 'Lequeint', 'Levone', 'Leandro', 'Lefteris', 'Legend', 'Lenual', 'Leonardo', 'Leonel', 'Liandre', 'Lidong', 'Liem', 'Lijun', 'Likiak', 'Limie', 'Lleyton', 'Lockie', 'Lorcan', 'Lorry', 'Lotkova', 'Lotta', 'Loudyn', 'Lova', 'Lucah', 'Luciano', 'Ludwig', 'Lukas', 'Luke', 'Lytle', 'Lareina', 'Lucine', 'Leehom', 'Lasse', 'Laval', 'Leighton', 'Leitham', 'Lemar', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leyam', 'Liberio', 'Livio', 'Lohan', 'Lowell', 'Lafreeta', 'Lakida', 'Lakisha', 'Laniece', 'Laquinta', 'LaQunda', 'Lashanda', 'LaSondra', 'Laurabeth', 'Laurice', 'Leshawn', 'Leany', 'Leeandra', 'Lenaya', 'Lene', 'Lera', 'Lexy', 'Liat', 'Liesa', 'Ligia', 'Lindie', 'Linef', 'Lisanne', 'Loanda', 'Loann', 'Lonneke', 'Luisa', 'Luquasha', 'Luv', 'Luzia', 'Lynndette', 'Leyla', 'Lorada', 'Lyanna', 'Lykke', 'Lennor', 'Lynch', 'Luthur', 'Lala', 'Lamond', 'Lissa', 'Licia', 'Leor', 'Leron', 'Lukman', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lyron', 'Limber', 'Levana', 'Lesa', 'Liliy', 'Loletta', 'Lassie', 'Loren', 'Lilia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Martin', 'Moore', 'Mary', 'Marshall', 'Murphy', 'Murray', 'Mason', 'Mitchell', 'Morris', 'Moon', 'Marsh', 'Maxwell', 'Michael', 'Miles', 'Morton', 'Moses', 'May', 'MacDonald', 'Mack', 'Maddox', 'Mann', 'Mathews', 'Maynard', 'Magee', 'Malcolm', 'Marcus', 'Mark', 'Marvin', 'Matthew', 'Mahoney', 'Major', 'Mallory', 'Malloy', 'Maloney', 'Manley', 'Mansfield', 'Manuel', 'Marin', 'Marquis', 'Mayfield', 'Maria', 'Matt', 'Maurice', 'Max', 'Mike', 'Milo', 'Melinda', 'Mercedes', 'Macy', 'Malcom', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcellus', 'Marlin', 'Marvel', 'Mathew', 'Mya', 'Magical', 'Mandel', 'Marico', 'Marlon', 'Maximilian', 'Merlin', 'Michell', 'Mick', 'Montague', 'Mortimer', 'Myron', 'Madison', 'Michelle', 'Melissa', 'Martha', 'Marie', 'Mildred', 'Marilyn', 'Marjorie', 'Monica', 'Marion', 'Melanie', 'Maureen', 'Marcia', 'Minnie', 'Marlene', 'Marian', 'Maxine', 'Mabel', 'Marsha', 'Margie', 'Miriam', 'Misty', 'Mae', 'Margarita', 'Marguerite', 'Molly', 'Madeline', 'Monique', 'Maggie', 'Maryann', 'Melody', 'Mamie', 'Marianne', 'Myra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcella', 'Mona', 'Meghan', 'Mindy', 'Mandy', 'Mirana', 'Marta', 'Mac', 'Madeleine', 'Madge', 'Madonna', 'Magda', 'Magdalen', 'Magnolia', 'Maisie', 'Malvina', 'Margaret', 'Marge', 'Margery', 'Margot', 'Mariana', 'Marietta', 'Marina', 'Marjory', 'Marnie', 'Mathilda', 'Matilda', 'Maud', 'Maude', 'Maura', 'Mavis', 'Michaela', 'Macarena', 'Machelle', 'Maci', 'Madai', 'Madalena', 'Madalyn', 'Madalynn', 'Maddison', 'Madelyn', 'Madelyne', 'Madelynn', 'Madilyn', 'Madisen', 'Madisyn', 'Madyson', 'Maegan', 'Maeve', 'Mafalda', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Magdalena', 'Maia', 'Maile', 'Maite', 'Makaila', 'Makayla', 'Makenna', 'Makenzie', 'Maleah', 'Malia', 'Malina', 'Malinda', 'Malissa', 'Mammie', 'Manasi', 'Manisha', 'Manuela', 'Mara', 'Maranda', 'Marcelle', 'Marcie', 'Mardi', 'Margret', 'Mariah', 'Mariam', 'Marianna', 'Maribel', 'Maricela', 'Mariel', 'Mariela', 'Marielle', 'Marilou', 'Marisa', 'Marisha', 'Marisol', 'Marissa', 'Marit', 'Marita', 'Maritza', 'Marla', 'Marlea', 'Marlee', 'Marleigh', 'Marlena', 'Martie', 'Martina', 'MaryEllen', 'Marylou', 'Marzia', 'Matilde', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Maya', 'Mayra', 'Mckayla', 'Meadow', 'Meagan', 'Meaghan', 'Megan', 'Meggan', 'Mei', 'Melany', 'Melba', 'Melina', 'Mena', 'Mercy', 'Mia', 'Miah', 'Mica', 'Micaela', 'Micki', 'Micole', 'Mikaela', 'Mikaila', 'Mikayla', 'Mikhaela', 'Millicent', 'Millie', 'Milly', 'Mimi', 'Mina', 'Minna', 'Miranda', 'Mireille', 'Mireya', 'Mirja', 'Mirna', 'Mirta', 'Miruna', 'Missy', 'Mitra', 'Mitzi', 'Moa', 'Moana', 'Moira', 'Mollie', 'Monserrat', 'Morag', 'Moriah', 'Mumtaz', 'Myah', 'Mycala', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Mustafa', 'Mustaqim', 'Muzafer', 'Mynor', 'Maahier', 'Machai', 'Mads', 'Magezi', 'Magnus', 'Mahmut', 'Maika', 'Majid', 'Makana', 'Malachi', 'Malakai', 'Malaki', 'Maldwyn', 'Maliq', 'Manfred', 'Manny', 'Marquale', 'Marac', 'Marcelo', 'Marcen', 'Mareks', 'Mariano', 'Markel', 'Marko', 'Markus', 'Marne', 'Marquice', 'Marquise', 'Martinho', 'Martinus', 'Marty', 'Martyn', 'Masuma', 'Mateo', 'Matrix', 'Matteo', 'Mattew', 'Matthijs', 'Mattia', 'Mauricio', 'Maxell', 'Maximillia', 'Maximus', 'Maxximillian', 'Mayed', 'Mckittrick', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Mehieddin', 'Mekhi', 'Meldon', 'Melton', 'Melvin', 'Menace', 'Meng', 'Menno', 'Merck', 'Merryc', 'Mervin', 'Merwin', 'Metcalfe', 'Michaelynn', 'Mickael', 'Miguel', 'Mihai', 'Mikade', 'Mikel', 'Mikhail', 'Mikola', 'Millard', 'Milosh', 'Milton', 'Mingo', 'Minh', 'Mircea', 'Miro', 'Misael', 'Mishan', 'Mitch', 'Mitchel', 'Moe', 'Mohamed', 'Mohammad', 'Mohammed', 'Mohannad', 'Mohsen', 'Moises', 'Montavious', 'Montgomery', 'Monty', 'Morten', 'Mosby', 'Moshe', 'Muhammad', 'Murali', 'Musa', 'Miya', 'Mahlon', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Makanalani', 'Malifadza', 'Malte', 'Mane', 'Mansing', 'Marcio', 'Marius', 'Marlindi', 'Marnix', 'Marquinn', 'Maurits', 'Mauro', 'Mckaulie', 'Meeko', 'Melz', 'Miika', 'Miroslav', 'Mollica', 'Montego', 'Monya', 'Mourad', 'Moustapha', 'Munem', 'Mushu', 'Maaike', 'Madaleine', 'Maddie', 'Maddy', 'Maeoh', 'Magalie', 'Magen', 'Maison', 'Maja', 'Makyia', 'Makynlee', 'Maleiah', 'Malene', 'Mamura', 'Manelle', 'Manette', 'Manon', 'Marea', 'Marilee', 'Maritess', 'Marjon', 'Markie', 'Marloes', 'Marrisa', 'Martiqua', 'Marwa', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Nelson', 'Noah', 'Natasha', 'Newman', 'Norman', 'Norton', 'Natalie', 'Nash', 'Neal', 'Newton', 'Nixon', 'Noble', 'Nolan', 'Norris', 'Neil', 'Nicholas', 'Naylor', 'Neely', 'Neville', 'Newell', 'Norwood', 'Nathan', 'Nathaniel', 'Nick', 'Napoleon', 'Nestor', 'Nicolas', 'Normand', 'Nancy', 'Nat', 'Nigel', 'Nicole', 'Norma', 'Nellie', 'Nora', 'Nina', 'Naomi', 'Nadine', 'Nettie', 'Nana', 'Nanette', 'Nannie', 'Natalia', 'Nathalie', 'Nathanael', 'Ned', 'Nelly', 'Nicola', 'Nicolette', 'Nicolle', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Nita', 'Nola', 'Nona', 'Norah', 'Noreen', 'Norene', 'Nabila', 'Nadia', 'Nafeeza', 'Nailah', 'Nalani', 'Nallely', 'Nanci', 'Nancie', 'Nani', 'Nannette', 'Narcisa', 'Narelle', 'Nasrin', 'Nataly', 'Natalya', 'Nathalia', 'Nathaly', 'Naya', 'Nayeli', 'Nayely', 'Neha', 'Neli', 'Nerissa', 'Nesha', 'Nessa', 'Neta', 'Neva', 'Nevaeh', 'Nia', 'Nichelle', 'Nicki', 'Nickole', 'Nicky', 'Nidia', 'Nieves', 'Niki', 'Nikka', 'Nikki', 'Nikola', 'Ninon', 'Nisa', 'Nitsa', 'Noelia', 'Noemi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Noga', 'Nokomis', 'Noriko', 'Nour', 'Nubia', 'Nuria', 'Nya', 'Nyah', 'Nyasia', 'Nyla', 'Nyree', 'Nadav', 'Nadir', 'Nafis', 'Nahoom', 'Naku', 'Namit', 'Nanda', 'Naquay', 'Narain', 'Narong', 'Nasir', 'Nassef', 'Nate', 'Nathanial', 'Nathen', 'Neath', 'Nehemiah', 'Nery', 'Nickolas', 'Nikhil', 'Nikolas', 'Niles', 'Nils', 'Nokovic', 'Nollie', 'Norberto', 'Noriel', 'Nuen', 'Nunez', 'Nuno', 'Nyle', 'Nacho', 'Najae', 'Nando', 'Nassim', 'Neandro', 'Neelix', 'Negro', 'Nemanja', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Nerendra', 'Nezra', 'Nichlas', 'Nicklas', 'Nikos', 'Nivaldo', 'Norvin', 'Nadage', 'Naheel', 'Nairobi', 'Nakoma', 'Nanlin', 'Nydia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Olivia', 'Oliver', 'Owen', 'Osborn', 'Olga', 'Odom', 'Ogden', 'Otto', 'Oakes', 'Oakley', 'Orlando', 'Oscar', 'Omar', 'Orville', 'Osmond', 'Oswald', 'Otis', 'Opal', 'Octavia', 'Odette', 'Olympia', 'Ophelia', 'Orval', 'Odalys', 'Oksana', 'Olimpia', 'Oliviana', 'Omaira', 'Orietta', 'Orlina', 'Obed', 'Octavio', 'Oden', 'Ody', 'Oggy', 'Oleg', 'Oluwatosin', 'Omari', 'Omarian', 'Omarion', 'Ompaa', 'Osa', 'Osamah', 'Osvaldo', 'Oswaldo', 'Ottis', 'Olina', 'Oprah', 'Obidinma', 'Olee', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Parker', 'Payne', 'Perry', 'Porter', 'Palmer', 'Peterson', 'Phillips', 'Powell', 'Page', 'Patrick', 'Paul', 'Parrish', 'Patton', 'Pearson', 'Petty', 'Phelps', 'Pollard', 'Pope', 'Potter', 'Prescott', 'Padgett', 'Paige', 'Parr', 'Patten', 'Paz', 'Pearce', 'Phipps', 'Pierre', 'Pierson', 'Pike', 'Piper', 'Platt', 'Pollock', 'Pete', 'Peter', 'Philip', 'Pearl', 'Patty', 'Patti', 'Penney', 'Percy', 'Phillip', 'Polly', 'Paddy', 'Phil', 'Primo', 'Patricia', 'Pamela', 'Phyllis', 'Paula', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Peggy', 'Pauline', 'Patsy', 'Penny', 'Priscilla', 'Pam', 'Paulette', 'Pandora', 'Pansy', 'Pattie', 'Paulina', 'Peggie', 'Penelope', 'Pennie', 'Phillis', 'Philomena', 'Phoebe', 'Porsche', 'Pacey', 'Pada', 'Pallavi', 'Paloma', 'Paola', 'Patia', 'Patrice', 'Perla', 'Perri', 'Petra', 'Phylicia', 'Phylis', 'Piia', 'Pilar', 'Pocahontas', 'Pollyanna', 'Pooja', 'Portia', 'Precious', 'Primrose', 'Princess', 'Priscila', 'Priya', 'Pablo', 'Papo', 'Pascal', 'Paulo', 'Pavee', 'Pedro', 'Peejay', 'Peng', 'Pepper', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rose', 'Rupert', 'Russell', 'Reed', 'Ross', 'Randolph', 'Raymond', 'Regan', 'Richard', 'Roy', 'Rosa', 'Roxanne', 'Ramsey', 'Randall', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Rhodes', 'Rivers', 'Rodgers', 'Rollins', 'Roman', 'Robert', 'Rock', 'Ruth', 'Ralph', 'Raines', 'Rankin', 'Ransom', 'Redding', 'Redmond', 'Rhea', 'Ring', 'Ritchie', 'Roe', 'Rachel', 'Rex', 'Robin', 'Roderick', 'Rodney', 'Ruby', 'Roger', 'Rae', 'Raleigh', 'Randell', 'Raphael', 'Raven', 'Rey', 'Richie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rick', 'Rodger', 'Rolf', 'Rolland', 'Romeo', 'Raja', 'Ralap', 'Reg', 'Reginald', 'Reuben', 'Rod', 'Ron', 'Ronald', 'Rory', 'Rudolf', 'Rebecca', 'Rita', 'Rhonda', 'Regina', 'Roberta', 'Rosemary', 'Ramona', 'Rosie', 'Rosalie', 'Rosemarie', 'Rochelle', 'Raquel', 'Randy', 'Randal', 'Raye', 'Reba', 'Rebekah', 'Reggie', 'Rena', 'Renata', 'Rhoda', 'Ricarda', 'Robbie', 'Roma', 'Romaine', 'Rachal', 'Rachelle', 'Raegan', 'Rafaela', 'Raija', 'Raina', 'Raiza', 'Raman', 'Rani', 'Rania', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rashida', 'Raya', 'Rayanna', 'Raychelle', 'Raylene', 'Rayna', 'Rayne', 'Reanna', 'Rebeca', 'Rebekka', 'Reet', 'Reina', 'Renie', 'Reno', 'Reta', 'Reyna', 'Rhianna', 'Rhiannon', 'Rikki', 'Ris', 'Rizpah', 'Rizza', 'Robynne', 'Romina', 'Ronda', 'Rosalyn', 'Rosanna', 'Rosanne', 'Rosetta', 'Rosina', 'Rosita', 'Rowena', 'Roxana', 'Roxane', 'Roxanna', 'Roz', 'Rute', 'Ruxandra', 'Ryann', 'Ryanna', 'Ryleigh', 'Radou', 'Radu', 'Raffaele', 'Rahul', 'Raje', 'Ramdas', 'Ramesh', 'Ramiles', 'Ramiro', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ranbir', 'Ranen', 'Rashad', 'Rashawn', 'Rati', 'Raul', 'Rayden', 'Raymundo', 'Reece', 'Reicko', 'Remco', 'Remington', 'Remko', 'Renante', 'Renford', 'Renzo', 'Reynaldo', 'Reza', 'Rhett', 'Ricardo', 'Rickard', 'Rickey', 'Ricki', 'Ricky', 'Rico', 'Riecko', 'Rigoberto', 'Rinat', 'Rino', 'Ritchard', 'Rizqinofa', 'Roadley', 'Roberto', 'Rocco', 'Rocky', 'Rodny', 'Rodolfo', 'Rodrigo', 'Roel', 'Rogelio', 'Rohan', 'Rolin', 'Romell', 'Ronaldo', 'Roosevelt', 'Roscoe', 'Rosemario', 'Rouxinol', 'Royden', 'Ruben', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rudy', 'Rui', 'Ruslan', 'Ruslim', 'Ruud', 'Ryanphilip', 'Ryker', 'Rylan', 'Ryley', 'Rynell', 'Rosamund', 'Raciel', 'Rafer', 'Rajan', 'Ravi', 'Rayniel', 'Remon', 'Rhean', 'Rian', 'Rienaldo', 'Riggin', 'Robbe', 'Robby', 'Robertino', 'Roelof', 'Rogan', 'Rohit', 'Ronel', 'Rooney', 'Raeann', 'Ragna', 'Razjahlynn', 'Reaina', 'Reandra', 'Reda', 'Reena', 'Refilwe', 'Reggy', 'Renita', 'Reva', 'Rhianne', 'Rhona', 'Rianne', 'Rihana', 'Rika', 'Rilana', 'Rio', 'Rivae', 'Ropelyn', 'Roseann', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Roseanna', 'Roseanne', 'Roshni', 'Rosibel', 'Rosslyn', 'Roxie', 'Rozas', 'Rudelle', 'Rudie', 'Rodman', 'Royce', 'Raby', 'Riona', 'Rayner', 'Rachel', 'Ramon', 'Roland', 'Rudolph', 'Rufus', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sophie', 'Scott', 'Spencer', 'Sophia', 'Stewart', 'Samantha', 'Sampson', 'Simon', 'Solomon', 'Stanley', 'Steve', 'Sanford', 'Sawyer', 'Sellers', 'Sexton', 'Shelton', 'Shepard', 'Shepherd', 'Sheppard', 'Sherman', 'Sofia', 'Samuel', 'Stanford', 'Steward', 'Shirley', 'Silvia', 'Sage', 'Sanderson', 'Scales', 'Sewell', 'Seymour', 'Sheehan', 'Sheffield', 'Sheldon', 'Sheridan', 'Sherwood', 'Shipley', 'Simms', 'Sinclair', 'Sam', 'Steven', 'Sharon', 'Sylvia', 'Stacy', 'Stella', 'Shelly', 'Stephen', 'Saul', 'Scarlett', 'Seth', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Shane', 'Silas', 'Sara', 'Snowy', 'Silverdew', 'Star', 'Sweety', 'Saxon', 'Sean', 'Sebastian', 'Sid', 'Silvester', 'Stan', 'Sandra', 'Sarah', 'Stephanie', 'Sherry', 'Sheila', 'Sally', 'Sue', 'Stacey', 'Sonia', 'Sherri', 'Sheryl', 'Sabrina', 'Sonya', 'Susie', 'Shelia', 'Sheri', 'Sadie', 'Sonja', 'Shari', 'Shawna', 'Sabina', 'Sabine', 'Sallie', 'Salome', 'Sammie', 'Sammy', 'Scarlet', 'Selena', 'Selene', 'Selina', 'Selma', 'Shera', 'Shona', 'Sibyl', 'Sigrid', 'Saba', 'Sable', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sachi', 'Sade', 'Sadia', 'Saffron', 'Saige', 'Salma', 'Samara', 'Samia', 'Samira', 'Sana', 'Sanchia', 'Sandrine', 'Sanne', 'Sapphire', 'Sarahi', 'Sarai', 'Saretta', 'Sarina', 'Sarita', 'Saskia', 'Savana', 'Savanah', 'Savanna', 'Savannah', 'Seanna', 'Sela', 'Serene', 'Serenity', 'Shaina', 'Shaira', 'Shakira', 'Shakyra', 'Shalana', 'Shalimar', 'Shalyse', 'Shameka', 'Shamika', 'Shana', 'Shanae', 'Shanda', 'Shandi', 'Shandra', 'Shani', 'Shania', 'Shanice', 'Shaniya', 'Shantel', 'Shantell', 'Shara', 'Sharyn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Shawnee', 'Shayla', 'Shaylee', 'Shaylyn', 'Shayna', 'Shazia', 'Sheba', 'Sheena', 'Shelbie', 'Sheree', 'Sherilyn', 'Sherryl', 'Sheyla', 'Shirlene', 'Shivaun', 'Shonda', 'Shonna', 'Shruti', 'Shyann', 'Shyanne', 'Shyla', 'Siani', 'Sidra', 'Sienna', 'Signe', 'Silje', 'Simone', 'Sindy', 'Siobhan', 'Sissy', 'Sivan', 'Skyla', 'Sloan', 'Soraya', 'Spela', 'Staci', 'Stacie', 'Starla', 'Starr', 'Stasha', 'Stefani', 'Stefania', 'Stefanie', 'Stephany', 'Stephenie', 'Stephnie', 'Suellen', 'Sukie', 'Susan', 'Susana', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Susannah', 'Susanne', 'Susy', 'Suzanne', 'Suzette', 'Suzie', 'Suzy', 'Svannah', 'Sveta', 'Svetlana', 'Sybil', 'Sydni', 'Sydnie', 'Sylvana', 'Sylvie', 'Sabastian', 'Safin', 'Salvador', 'Salvatore', 'Samson', 'San vey', 'Sang', 'Santiago', 'Saran', 'Sarath', 'Savege', 'Savion', 'Savorn', 'Savraj', 'Saymour', 'Sayre', 'Seamus', 'Sedge', 'Selim', 'Sem', 'Semaj', 'Senne', 'Seppe', 'Sergey', 'Sergio', 'Severiano', 'Shafiat', 'Shahbaz', 'Shahiem', 'Shailen', 'Shamar', 'Shamari', 'Shanook', 'Shasta', 'Shazeer', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sheaden', 'Shelwin', 'Shemar', 'Sherlock', 'Shivang', 'Shomari', 'Shwan', 'Simao', 'Simraj', 'Sinath', 'Sincere', 'Sion', 'Sitani', 'Siti', 'Sixto', 'Sjoerd', 'Slade', 'Slater', 'Slawomir', 'Sleepy', 'Smiley', 'Smitty', 'Snax', 'Sneed', 'Snuffel', 'Soeiro', 'Sonzer', 'Sonny', 'Sophea', 'Spak', 'Speedy', 'Spike', 'Spiro', 'Sporting', 'St. john', 'Stanislas', 'Staton', 'Steen', 'Steffan', 'Stephon', 'Sterling', 'Stijn', 'Stone', 'Strider', 'Strunk', 'Stuart', 'Sufyan', 'Suhana', 'Sukhveer', 'Suren', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sutton', 'Suzuki', 'Sven', 'Swabie', 'Swede', 'Syed', 'Spark', 'Siuwah', 'Samli', 'Skywu', 'Sandee', 'Shino', 'Sofie', 'Saad', 'Saber', 'Sakkie', 'Sandro', 'Sanjeev', 'Saraph', 'Savoy', 'Scottie', 'Seaton', 'Sedrick', 'Selwyn', 'Shahid', 'Simuel', 'Sizemore', 'Sjaco', 'Sjef', 'Skip', 'Skot', 'Slavik', 'Sonte', 'Sorin', 'Stafford', 'Sunil', 'Surat', 'Sylvano', 'Stig', 'Sabire', 'Saimah', 'Samanta', 'Santena', 'Sanyonette', 'Schantol', 'Semmy', 'Senia', 'Shaedra', 'Shakema', 'Shaketta', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Shalaya', 'Shalita', 'Shamron', 'Shanell', 'Shanika', 'Shannia', 'Sharai', 'Shardeigh', 'Sharli', 'Sharmane', 'Sharna', 'Sharni', 'Shayodi', 'Sherya', 'Shianne', 'Shifrah', 'Shmily', 'Shontrease', 'Sicari', 'Sidnie', 'Silda', 'Simran', 'Sinead', 'Siniyah', 'Sjaya', 'Slava', 'Solveig', 'Sorana', 'Sterre', 'Stevisha', 'Sumera', 'Suyen', 'Swapna', 'Synaisha', 'Sondra', 'Shandy', 'Sakura', 'Sharron', 'Simba', 'Sahar', 'Sumi', 'Solomom', 'Shawn', 'Shaun', 'Sylvester', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tami', 'Todd', 'Tyler', 'Tanner', 'Tate', 'Terrell', 'Townsend', 'Travis', 'Tobias', 'Talbot', 'Tatum', 'Teague', 'Temple', 'Thorne', 'Thorpe', 'Thurman', 'Thurston', 'Titus', 'Tobin', 'Trent', 'Tripp', 'Tyson', 'Theodore', 'Tiffany', 'Timothy', 'Tom', 'Troy', 'Truman', 'Tandy', 'Tomas', 'Tankard', 'Tab', 'Ted', 'Ternence', 'Theobald', 'Thomas', 'Tim', 'Toby', 'Tony', 'Tyrone', 'Teresa', 'Theresa', 'Tammy', 'Tina', 'Thelma', 'Tara', 'Terri', 'Tonya', 'Tamara', 'Tanya', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tracey', 'Toni', 'Traci', 'Teri', 'Tricia', 'Tasha', 'Tabitha', 'Tammie', 'Tania', 'Teddy', 'Terrance', 'Terrence', 'Tess', 'Tessa', 'Tessie', 'Thad', 'Thaddeus', 'Thalia', 'Thea', 'Theodora', 'Theresia', 'Thomasina', 'Tilda', 'Tillie', 'Torrie', 'Trevor', 'Tristan', 'Trudy', 'Tabatha', 'Tabea', 'Tahnee', 'Taina', 'Taisha', 'Taleen', 'Talia', 'Talina', 'Talisha', 'Talitha', 'Taliyah', 'Tallulah', 'Tamah', 'Tamatha', 'Tameka', 'Tamia', 'Tamika', 'Tamsen', 'Tamsin', 'Tamzin', 'Tana', 'Tangi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tanisha', 'Taniya', 'Tanja', 'Taryn', 'Tatiana', 'Tatianna', 'Tatjana', 'Tatyana', 'Tawanna', 'Tawny', 'Taya', 'Tayla', 'Taysia', 'Tegan', 'Telma', 'Tennille', 'Tera', 'Teyana', 'Therese', 'Tia', 'Tiana', 'Tianna', 'Tiara', 'Tierney', 'Tierra', 'Tiffani', 'Tirzah', 'Tomara', 'Tonia', 'Tori', 'Toya', 'Tracie', 'Trang', 'Trina', 'Trish', 'Trixie', 'Tryna', 'Twila', 'Tyla', 'Tyra', 'Taber', 'Tad', 'Taj', 'Tajon', 'Tamaitikoha', 'Tamaris', 'Tambor', 'Tampe', 'Tapasvi', 'Tarek', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tareo', 'Tarian', 'Tariku', 'Tariq', 'Tavis', 'Taylen', 'Tazel', 'Tehmasp', 'Teifion', 'Teno', 'Terrill', 'Teymur', 'Thales', 'Thao', 'Thayne', 'Thesshell', 'Thien', 'Thierry', 'Thinh', 'Tiago', 'Timmi', 'Timmy', 'Timofey', 'Tino', 'Tinon', 'Tion', 'Tishon', 'Tito', 'Tobyn', 'Toddy', 'Tonaka', 'Tonino', 'Tonio', 'Topacio', 'Torrey', 'Tosh', 'Traman', 'Travers', 'Travon', 'Trayden', 'Trayvon', 'Trenton', 'Trever', 'Trevion', 'Trevis', 'Trevoc', 'Trevon', 'Trey', 'Treyvon', 'Trianno', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Triano', 'Trijny', 'Tristian', 'Tristin', 'Triston', 'Tronne', 'Tullio', 'Tupac', 'Tureyuki', 'Tusitala', 'Twan', 'Twoee', 'Tylor', 'Tyquan', 'Tyrese', 'Tyshawn', 'Tyshon', 'Tavia', 'Taiva', 'Tamir', 'Tanyel', 'Tasos', 'Taven', 'Tazhon', 'Teikari', 'Teylor', 'Themis', 'Thobian', 'Thylin', 'Timmu', 'Tineke', 'Tj', 'Toyeeb', 'Trystan', 'Tuca', 'Tuwan', 'Twiggy', 'Tygo', 'Tyzhe', 'Timerante', 'Tylique', 'Tshima', 'Tabby', 'Taige', 'Taila', 'Terence', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Vance', 'Vera', 'Vernon', 'Vinson', 'Victor', 'Virgil', 'Victoria', 'Viola', 'Vicente', 'Van', 'Verne', 'Vic', 'Vito', 'Vivian', 'Virginia', 'Valerie', 'Veronica', 'Vanessa', 'Vicki', 'Vickie', 'Velma', 'Violet', 'Verna', 'Vicky', 'Valeria', 'Valery', 'Venus', 'Verena', 'Vesta', 'Vida', 'Valencia', 'Valentina', 'Valorie', 'Vanda', 'Vanesa', 'Vania', 'Varsha', 'Veena', 'Veer', 'Vena', 'Verity', 'Veronique', 'Vesna', 'Vien', 'Vijaya', 'Vikki', 'Vilma', 'Viorica', 'Viviana', 'Vadim', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Walker', 'Wilson', 'Ward', 'Webb', 'Warren', 'Washington', 'Watkins', 'West', 'Wheeler', 'Williamson', 'Willis', 'Wallace', 'Wade', 'Walter', 'Warner', 'Webster', 'William', 'Waller', 'Walton', 'Ware', 'Watts', 'Weber', 'Whitehead', 'Wilder', 'Wilkinson', 'Witt', 'Wolfe', 'Wilbur', 'Winston', 'Winifred', 'Waite', 'Walden', 'Waldron', 'Washburn', 'Watt', 'Webber', 'Weldon', 'Wesley', 'Westbrook', 'Weston', 'Whitfield', 'Whitlock', 'Whitmore', 'Whittaker', 'Willard', 'Willoughby', 'Winslow', 'Wayne', 'Wendell', 'Woodrow', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy']


function zonghe() {
    try {
        if (text("知道了").exists()) {
            TKB.xgsrizhi("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("以后再说").exists()) {
            TKB.xgsrizhi("以后再说")
            click("以后再说")
            sleep(2000)
        }
        if (desc("以后再说").exists()) {
            TKB.xgsrizhi("以后再说")
            try {
                if (desc("以后再说").exists()) {
                    var ss = desc("以后再说").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if (text("我知道了").exists()) {
            TKB.xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("以后再说").exists()) {
            TKB.xgsrizhi("以后再说")
            click("以后再说")
            sleep(2000)
        }
        if (text("允许").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("允许")
            click("允许")
            sleep(2000)
        }
        if (text("立即下载").exists() && text("点击重播").exists()) {
            TKB.xgsrizhi("点击重播2")
            back()
            sleep(2000)
        }

        if (text("点击查看").exists() && text("点击重播").exists()) {
            TKB.xgsrizhi("点击重播")
            back()
            sleep(2000)
            back()
            sleep(3000)
        }
        if (text("立即赠送").exists()) {
            TKB.xgsrizhi("立即赠送")
            back()
            sleep(2000)
        }
        if (text("不感兴趣？长按试试").exists()) {
            TKB.xgsrizhi("不感兴趣？长按试试")
            back()
            sleep(500)
            back()
            sleep(2000)
        }
        if (text("始终同意").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("始终同意")
            click("始终同意")
            sleep(2000)
        }
        if (text("始终允许").exists() && text("禁止").exists()) {
            TKB.xgsrizhi("始终允许")
            click("始终允许")
            sleep(2000)
        }
        if (text("允许").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("允许拒绝")
            click("允许")
            sleep(2000)
        }
        if (text("同意").exists() && text("不同意").exists()) {
            TKB.xgsrizhi("同意不同意")
            click("同意")
            sleep(2000)
        }
        if (text("授权").exists() && textContains("授权后，").exists()) {
            TKB.xgsrizhi("授权")
            click("授权")
            sleep(2000)
        }
        if (text("立即赠送").exists() && id("com.ss.android.ugc.live:id/dur").exists()) {
            back()
            sleep(2000)
        }
        if (text("授权提示").exists() && text("同 意").exists()) {
            TKB.xgsrizhi("同意")
            click("同 意")
            sleep(2000)
        }
        if (textContains("关注主播").exists() && text("关注").exists()) {
            back()
            sleep(2000)
        }
        if (text("同意并登录").exists() && text("取消").exists()) {
            TKB.xgsrizhi("同意并登录")
            click("同意并登录")
            sleep(2000)
        }
        if (text("我要免流").exists() && text("暂不需要").exists()) {
            TKB.xgsrizhi("暂不需要")
            click("暂不需要")
            sleep(2000)
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

//火山养号
function hsyh() {
    TKB.xgsrizhi("火山养号")
    launch(dqbaoming)
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(50, 90)
    var TSD = (new Date()).getTime()
    var is_type = ''
    var live_date = random(1, 8),
        video_num = 1
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                TKB.xgsrizhi("首页")
                var title_list = className('android.widget.LinearLayout').depth(10).findOnce().children()
                var asa = random(1, 10)
                if (asa > 8) {
                    if (title_list.size() > 4) {
                        var type_list = ['直播', '视频', '精选', '关注']
                    } else {
                        var type_list = ['直播', '视频', '关注']
                    }
                    title_list.some(e => {
                        if (type_list.indexOf(e.child(0).text()) === -1) {
                            log(e.child(0).text())
                            var t = id('com.ss.android.ugc.live:id/title').text(e.child(0).text()).findOnce().parent()
                            TKB.xgsrizhi("点击同城栏")
                            t.click()
                            sleep(100)
                            t.click()
                            is_type = '同城'
                            video_num = random(8, 15)
                            return true
                        } else {
                            return false
                        }
                    })
                } else {
                    if (asa == 8) {
                        TKB.xgsrizhi("点击直播栏")
                        var t = id('com.ss.android.ugc.live:id/title').text('直播').findOnce().parent()
                        t.click()
                        sleep(100)
                        t.click()
                        is_type = '直播'
                    } else if (title_list.size() > 4 && asa == 1) {
                        TKB.xgsrizhi("点击精选栏")
                        var t = id('com.ss.android.ugc.live:id/title').text('精选').findOnce().parent()
                        t.click()
                        sleep(100)
                        t.click()
                        is_type = '精选'
                        video_num = random(8, 15)
                    } else {
                        TKB.xgsrizhi("点击视频栏")
                        var t = id('com.ss.android.ugc.live:id/title').text('视频').findOnce().parent()
                        t.click()
                        sleep(100)
                        t.click()
                        is_type = '视频'
                        video_num = random(8, 15)
                    }
                }
                sleep(10 * 1000)
            }
            if (is_type == '视频') {
                var video_list = id('com.ss.android.ugc.live:id/aku').depth(14).find()
                video_list[random(0, video_list.size() - 1)].child(0).click()
                sleep(2000)
            } else if (is_type == '同城') {
                var video_list = id('com.ss.android.ugc.live:id/aku').depth(13).find()
                video_list[random(0, video_list.size() - 1)].child(0).click()
                sleep(2000)
            } else if (is_type == '直播') {
                var video_list = id('com.ss.android.ugc.live:id/blw').depth(15).find()
                video_list[random(0, video_list.size() - 1)].parent().click()
                sleep(2000)
                var zbt = (new Date()).getTime() //直播的时间
            }
            if (descEndsWith("喜欢按钮").exists() && descEndsWith("评论按钮").exists() && descEndsWith("转发按钮").exists()) {
                TKB.xgsrizhi("播放视频界面")
                var aasr = random(15, 35)
                var ssd = (new Date()).getTime()
                while (1) {
                    if ((new Date()).getTime() - ssd > aasr * 1000) {
                        TKB.xgsrizhi("看完了")
                        break
                    } else {
                        toastLog("观看视频中")
                        zonghe()
                        sleep(3000)
                    }
                }
                if (aasr > 40) {
                    TKB.xgsrizhi("观看评论")
                    descEndsWith("评论按钮").findOnce().click()
                    sleep(2000)
                    back()
                } else {
                    if (random(1, 100) == 50) {
                        toastLog("点赞视频")
                        descEndsWith("喜欢按钮").findOnce().click()
                        sleep(2000)
                    }
                }
                video_num--
                is_type = ''
                swipe(random(600, 650), random(1350, 1400), random(600, 650), random(180, 240), random(400, 500))
                sleep(random(3000, 5000))
                TSD = (new Date()).getTime()
            }
            if (!video_num && descEndsWith("喜欢按钮").exists()) {
                back()
                sleep(2000)
            }
            if (text("直播已结束").exists() && id("com.ss.android.ugc.live:id/ja").exists()) {
                TKB.xgsrizhi("直播已经结束")
                back()
                sleep(2000)
            }
            if (id("com.ss.android.ugc.live:id/bhc").exists() && id("com.ss.android.ugc.live:id/yg").exists() && !descEndsWith("喜欢按钮").exists()) {
                TKB.xgsrizhi("直播界面")
                if ((new Date()).getTime() - zbt > live_date * 60 * 1000) {
                    back()
                    sleep(2000)
                } else {
                    toastLog("观看直播中")
                }
                zonghe()
                TSD = (new Date()).getTime()
                is_type = ''
            }
            if (text('关注主播不再错过精彩直播').exists() && text('退出').exists()) {
                TKB.xgsrizhi("退出直播间")
                click("退出")
                sleep(2000)
            }
            zonghe()
            sleep(500)
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//火山登录
function hsdl() {
    TKB.xgsrizhi("火山登录")
    launch(dqbaoming)
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
        // var zh = '18072064352'
        // var yzm = "3976"
    var is_verify = 2,
        is_send = false,
        is_login = false,
        send_money = false
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (desc('返回').exists() && id('com.ss.android.ugc.live:id/cmn').exists() && desc('输入评论').exists()) {
                desc('返回').findOnce().click()
                sleep(2000)
            }
            if (text("注册/登录").exists() && id("com.ss.android.ugc.live:id/dae").exists() && id('com.ss.android.ugc.live:id/title').exists()) {
                TKB.xgsrizhi("首页点登录")
                click("注册/登录")
                sleep(2000)
            }
            if (text('一键登录失败').exists()) {
                back()
                sleep(2000)
            }
            if (id('com.ss.android.ugc.live:id/wp').exists() && id('com.ss.android.ugc.live:id/wp').findOnce().checked() == false) {
                id('com.ss.android.ugc.live:id/wp').findOnce().click()
                sleep(2000)
            }
            if (id('com.ss.android.ugc.live:id/wd').exists() && id('com.ss.android.ugc.live:id/wd').findOnce().checked() == false) {
                id('com.ss.android.ugc.live:id/wd').findOnce().click()
                sleep(2000)
            }
            if ((text('使用本机号码一键登录').exists() && text('使用本机号码一键登录').findOnce().clickable() == true) || (text('本机号码一键登录').exists() && text('本机号码一键登录').findOnce().clickable() == true)) {
                if (text('使用本机号码一键登录').exists()) {
                    click("使用本机号码一键登录")
                } else {
                    click("本机号码一键登录")
                }
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('使用上次账号登录').exists()) {
                click('使用上次账号登录')
                sleep(2000)
            }
            if (text('一键登录').exists()) {
                click('一键登录')
                sleep(2000)
            }
            if (text('使用手机号登录').exists()) {
                click('使用手机号登录')
                sleep(2000)
            }
            if (text('使用本机号码登录').exists() && text('使用本机号码登录').findOnce().clickable() == true) {
                click('使用本机号码登录')
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('下一步').exists() && text('下一步').findOnce().clickable() == true) {
                click('下一步')
                sleep(2000)
            }
            if (text("请输入手机号").exists()) {
                TKB.xgsrizhi("播放视频界面")
                text("请输入手机号").findOnce().click()
                sleep(1000)
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip,  user_id,  yhbh,  app_id,  zh)
                text("请输入手机号").findOnce().setText(zh)
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('验证码').exists() && (text('下一步').exists() || text('登录').exists())) {
                sleep(15 * 1000)
                yzm = TKB.huoquyzm("抖音火山版")
                sleep(2000)
                if (desc('captcha verify').exists()) {
                    TKB.xgsrizhi("出现点选验证码或滑块验证码")
                    TKB.qinglihh(dqbaoming)
                    return false
                }
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                } else {
                    TKB.xgsrizhi("输入验证码" + yzm)
                    click('验证码')
                    sleep(2000)
                    text("验证码").findOnce().setText(yzm)
                    sleep(2000)
                }
                TSD = (new Date()).getTime()
                is_verify--
            }
            if (text('下一步').exists() && text('下一步').findOnce().clickable() == true && id('com.ss.android.ugc.live:id/sz').exists()) {
                TKB.xgsrizhi("验证码-下一步")
                click('下一步')
                is_send = true
                sleep(2000)
            }
            if (is_send == true && text('下一步').exists() && text('下一步').findOnce().clickable() == true) {
                id('com.ss.android.ugc.live:id/sz').findOnce().click()
                is_verify--
                sleep(2000)
            }
            if (is_send == false && text('登录').exists() && text('登录').findOnce().parent().parent().clickable() == true) {
                text('登录').findOnce().parent().parent().click()
                is_send = true
                sleep(2000)
            }
            if (is_send == true && text('登录').exists() && text('登录').findOnce().parent().parent().clickable() == true) {
                TKB.qinglihh(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                is_send = false
                is_verify--
            }
            if (text('获取短信验证码').exists() && text('获取短信验证码').findOnce().clickable() == true) {
                TKB.xgsrizhi("获取短信验证码")
                click('获取短信验证码')
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('编辑资料').exists() && text('跳过').exists()) {
                TKB.xgsrizhi("跳过编辑资料")
                click('跳过')
                sleep(2000)
            }
            if (text('一键登录成功').exists() && text('完成').exists()) {
                TKB.xgsrizhi("一键登录成功")
                click('完成')
                sleep(2000)
            }
            if (text('我要申诉').exists() && text('取消').exists()) {
                TKB.xgsrizhi("账号封禁")
                click('取消')
                TKB.qinglihh(dqbaoming)
                return false
            }
            if (id('com.ss.android.ugc.live:id/ew').exists() && text('关注').exists() && text('视频').exists() && text('直播').exists() && !text('注册/登录').exists()) {
                TKB.xgsrizhi("登录成功")
                is_login = true
                id('com.ss.android.ugc.live:id/cem').findOnce().child(0).click()
                sleep(5000)
            }
            if (desc('captcha verify').exists()) {
                TKB.xgsrizhi("出现点选验证码或滑块验证码")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if (is_login == true && text('火苗管理').exists() && (text('玩火山，赚火苗').exists() || textStartsWith('当前火苗').exists())) {
                if (textStartsWith('当前火苗').exists()) {
                    var hm_mun = textStartsWith('当前火苗').findOnce().text().substr(4)
                    if (hm_mun.charAt(hm_mun.length - 1) == "万") {
                        hm_mun = hm_mun.substr(0, hm_mun.length - 1)
                        var money = (hm_mun / 3).toFixed(2)
                    } else {
                        var money = (hm_mun / 30000).toFixed(2)
                    }
                } else {
                    var money = '0.00'
                }
                TKB.xgsrizhi("资产:" + money)
                toastLog("资产:" + money)
                back()
                sleep(1000)
                TKB.upjine(sbip,  user_id,  yhbh,  app_id, money)
                send_money = true
            }
            if (is_login == true && send_money == true) {
                return true
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(dqbaoming)
                return false
            }
            zonghe()
            sleep(500)
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//火山修改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    sleep(6000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    var name_return = '抖音火山版昵称不符合'
    var img_return = '抖音火山版头像不符合'
    var jj_return = '抖音火山版简介不符合'
    var status = 0
    var cs = 0
    var tep = 0 //判断编辑资料界面该干啥
    var nf = random(1990, 2002)
    var zz = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    var yf = zz[Math.floor(Math.random() * zz.length)]
    var rq = random(1, 28)
    if (rq < 10) {
        rq = '0' + rq
    }
    var x = rq + ' ' + yf + '月 ' + nf
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(name)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie'].split('|||')[0]
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    while (1) {
        if ((new Date()).getTime() - BD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            TKB.killapp("抖音短视频")
            sleep(1000)
            launch("com.ss.android.ugc.live")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi("超时退出")
            return false
        }
        zonghe()
        if (text("关注").exists() && text("视频").exists() && text("直播").exists()) {
            // id("com.ss.android.ugc.live:id/ew").findOnce().parent().click()
            click(75, 127)
            TKB.xgsrizhi("点击到个人主页");
            sleep(3000)
        }
        if (text('消息').exists() && text('搜索').exists() && text('钱包').exists() && text('进入我的主页').exists()) {
            TKB.xgsrizhi("主页")
            click('进入我的主页')
            sleep(2000)
        }
        if (text('编辑资料').exists() && text('粉丝').exists() && text('关注').exists()) {
            TKB.xgsrizhi("编辑资料")
            click('编辑资料')
            sleep(2000)
        }
        if (text("编辑资料").exists() && text("保存").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                if (xs['是否修改头像'] == '是') {
                    zonghe()
                    TKB.xgsrizhi("修改头像")
                    if (text("编辑资料").exists() && text("点击更换头像").exists()) {
                        TKB.xgsrizhi("点击头像")
                        id("com.ss.android.ugc.live:id/b1q").findOnce().click()
                        sleep(3000)
                    }
                    if (text("从相册选择").exists() && text("取消").exists()) {
                        TKB.xgsrizhi("从相册选择")
                        click("从相册选择")
                        sleep(6000)
                    }
                    if (desc("列表视图").exists() && desc("更多选项").exists()) {
                        TKB.xgsrizhi("选择照片")
                        click(289, 584) //选择第一张
                        sleep(3000)
                        TKB.xgsrizhi("点击裁剪")
                        click("裁剪") //确定
                        sleep(1000)
                    }
                    if (text("编辑资料") && TKB.zhaose("if isColor(108,286,0xff985d,80) and isColor(172,284,0xff945e,80) and isColor(211,285,0xff925e,80) and isColor(275,286,0xff8e5f,80) and isColor(777,288,0xff6e65,80) and isColor(853,288,0xff6965,80) and isColor(896,288,0xff6665,80) and isColor(934,290,0xff6466,80) and isColor(982,290,0xff6166,80) and isColor(1020,290,0xff5e67,80) then")) {
                        TKB.xgsrizhi("抖音火山版头像不符合")
                        img_return = '抖音火山版头像不符合'
                        tep = 1
                    } else {
                        TKB.xgsrizhi("抖音火山版头像符合")
                        img_return = '抖音火山版头像符合'
                        tep = 1
                    }
                } else {
                    TKB.xgsrizhi("抖音火山版头像不修改")
                    img_return = '抖音火山版头像不修改'
                    tep = 1
                }
            }
            if (tep == 1) {
                // TKB.xgsrizhi("修改昵称")
                if (xs['是否修改名字'] == '是') {
                    zonghe()
                    if (text(name).exists() && text("编辑资料").exists()) {
                        TKB.xgsrizhi("已经是该名字了")
                        toastLog("名字修改完成")
                        name_return = '抖音火山版昵称符合'
                        tep = 2
                        sleep(500)
                    } else if (text("编辑资料").exists() && text("昵称").exists()) {
                        TKB.xgsrizhi("清空原来的昵称")
                        setText(0, nickname)
                        sleep(3000)
                    }
                    // if (id("com.ss.android.ugc.live:id/c1o").findOnce().text() !== name) {
                    //     TKB.xgsrizhi("抖音火山版昵称不符合")
                    //     name_return = '抖音火山版昵称不符合'
                    // }
                } else {
                    TKB.xgsrizhi("抖音火山版昵称不修改")
                    name_return = '抖音火山版昵称不修改'
                    tep = 2
                }
            }
            if (tep == 2) {
                TKB.xgsrizhi("修改性别")
                zonghe()
                if (xs['是否修改性别'] == '是') {
                    if (text(xs['性别']).exists() && text("性别").exists()) {
                        toastLog("性别修改完成")
                        TKB.xgsrizhi("已经是该性别了")
                        tep = 3
                    } else if (text("编辑资料").exists() && text("性别").exists()) {
                        TKB.xgsrizhi("点击性别")
                        id("com.ss.android.ugc.live:id/aui").findOnce().click()
                        sleep(3000)
                    }
                    if (text("男").exists() && text("女").exists()) {
                        click(xs['性别'])
                        sleep(3000)
                    }
                } else {
                    TKB.xgsrizhi("抖音火山版性别不修改")
                    tep = 3
                }
            }
            if (tep == 3) {
                if (!bounds(36, 1122, 444, 1179).exists() && text("编辑资料").exists()) {
                    toastLog("生日修改完成")
                    TKB.xgsrizhi("生日修改完成")
                    tep = 4
                } else if (bounds(36, 1122, 444, 1179).exists() && text("编辑资料").exists()) {
                    TKB.xgsrizhi('日期' + x)
                    id('com.ss.android.ugc.live:id/ms').findOnce().parent().parent().click()
                    while (1) {
                        if (desc(x).exists()) {
                            desc(x).findOnce().click()
                            sleep(1000)
                            TKB.xgsrizhi('找到本月')
                            click('确定')
                            sleep(1000)
                            toastLog("生日修改完成")
                            TKB.xgsrizhi("生日修改完成")
                            tep = 4
                            break
                        } else {
                            cs++
                            if (Number(cs) > 140) {
                                back()
                                sleep(500)
                                if (text('继续编辑').exists() && text('放弃').exists()) {
                                    TKB.xgsrizhi('放弃')
                                    click('放弃')
                                    sleep(2000)
                                }
                                //退出不保存修改重来一遍
                                tep = 1
                                cs = 0
                                break
                            }
                            id('android:id/next').click()
                            sleep(random(200, 400))
                        }
                    }
                }
            }
            if (tep == 4) {
                if (xs['是否修改简介'] == '是') {
                    TKB.xgsrizhi("修改简介")
                    zonghe()
                    if (text("编辑资料").exists() && text(jianjie).exists()) {
                        TKB.xgsrizhi("已经是该简介了")
                        tep = 5
                        jj_return = '抖音火山版简介符合'
                        click("保存")
                        TKB.xgsrizhi("点击保存")
                        sleep(8000)
                    } else if (text("编辑资料").exists() && text("保存").exists()) {
                        TKB.xgsrizhi("填写简介")
                        id("com.ss.android.ugc.live:id/cuc").findOnce().setText(jianjie)
                        sleep(2000)
                    }
                } else {
                    TKB.xgsrizhi("抖音火山版简介不修改")
                    jj_return = '抖音火山版简介不修改'
                    tep = 5
                }
            }
            if (tep == 5) {
                if (name_return == '抖音火山版昵称符合' && img_return == '抖音火山版头像符合' && jj_return == '抖音火山版简介符合') {
                    status = 1
                } else {
                    status = 2
                }
                var info = name_return + ',' + img_return + ',' + jj_return
                TKB.upinfo(sbip, user_id, yhbh, info, status)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh()
                return true
            }
        }
    }
}

function fabusp() {
    TKB.xgsrizhi("发布视频")
    launch("com.ss.android.ugc.live")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var a = 0
    var x = 0
    var sb = 0 //sb大于3判断失败
    var ylsl = 0 //现在的作品数量
    var zpsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var status = 0
    var xs = TKB.zhid(sbip, run_id)
    var category = xs['类型']
        // var category = '美女'
    var zz = TKB.get_video(sbip, user_id, yhbh, category)
    var shipin_id = zz['shipin_id']
    var lj = zz['text']
    if (lj == false) {
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false) {
        TKB.xgsrizhi("下载视频失败")
        return false
    }

    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                status = 1
                    // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                return true
            }
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 7 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (desc('返回').exists() && id('com.ss.android.ugc.live:id/cmn').exists() && desc('输入评论').exists()) {
                desc('返回').findOnce().click()
                sleep(2000)
            }
            if (x == 0) {
                zonghe()
                if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                    TKB.xgsrizhi("首页")
                    id('com.ss.android.ugc.live:id/ew').findOnce().parent().click()
                    sleep(2000)
                }
                if (text('消息').exists() && text('搜索').exists() && text('钱包').exists() && text('进入我的主页').exists()) {
                    TKB.xgsrizhi("主页")
                    click('进入我的主页')
                    sleep(2000)
                }
                if (text('编辑资料').exists() && id('com.ss.android.ugc.live:id/dur').exists() && id('com.ss.android.ugc.live:id/e52').exists()) {
                    var ss = TKB.getAllTexts()
                    for (var j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("作品 ") != -1) {
                            click(ss[j])
                            TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            TKB.xgsrizhi("作品数量：" + zpsl)
                            if (fb == 0) {
                                ylsl = zpsl
                                TKB.xgsrizhi(ylsl)
                            }
                            if (zpsl > ylsl) {
                                TKB.xgsrizhi("现在的作品数量大于原来的")
                                toastLog('发布成功')
                                sleep(1000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                status = 1
                                    // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                                return true
                            }
                            sleep(500)
                            back()
                            sleep(1000)
                            back()
                            sleep(1000)
                            x = 1
                        }
                    }
                }
            }
            if (a == 0) {
                zonghe()
                if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                    TKB.xgsrizhi("首页")
                    id('com.ss.android.ugc.live:id/db1').findOnce().parent().click()
                    sleep(2000)
                }
                if (id('com.ss.android.ugc.live:id/title').exists() && text('我知道了').exists() && id('com.ss.android.ugc.live:id/cab').exists()) {
                    TKB.xgsrizhi("启动中")
                    sleep(5000)
                }
                if (text("一键大片").exists() && text("聊一聊").exists() && text("拍摄").exists() || text("拍摄").exists() && text("K歌").exists() && text("拍摄").exists()) {
                    TKB.xgsrizhi("拍摄")
                    click("拍摄")
                    sleep(1000)
                }
                if (id('com.ss.android.ugc.live.liveshortvideo_so:id/btn_record_view').exists() && text("上传").exists() && text("音乐").exists()) {
                    TKB.xgsrizhi("上传")
                    click("上传")
                    sleep(2000)
                }
                if (id('com.ss.android.ugc.live:id/i5').exists() && text("视频").exists() && text("照片").exists()) {
                    TKB.xgsrizhi("视频")
                    id('com.ss.android.ugc.live.liveshortvideo_so:id/title_video').text('视频').click()
                    sleep(2000)
                }
                if (bounds(0, 414, 351, 765).exists()) {
                    TKB.xgsrizhi("点击第一个")
                    click(200, 500)
                    sleep(2000)
                }
                if (text("裁剪").exists() && text("下一步").exists() && text("标准").exists()) {
                    TKB.xgsrizhi("裁剪")
                    sleep(5000)
                    click("下一步")
                    sleep(2000)
                }
                if (text('处理中，请不要退出').exists()) {
                    TKB.xgsrizhi("处理中")
                    sleep(5000)
                }
                if (text("特效").exists() && text("下一步").exists() && text("配乐").exists()) {
                    TKB.xgsrizhi("下一步")
                    click("下一步")
                    sleep(2000)
                }
                if (text("同步至圈子").exists() && text("添加位置").exists() && text("发布").exists()) {
                    TKB.xgsrizhi("发布")
                    click("发布")
                    a = 1
                    sleep(2000)
                }
            } else if (a == 1) {
                zonghe()
                var ss = TKB.getAllTexts()
                for (var j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("视频上传") != -1) {
                        TKB.xgsrizhi('视频上传中')
                        toastLog('视频上传中')
                        sleep(3000)
                    } else if (ss[j].indexOf("上传成功") != -1) {
                        var aa = text(ss[j]).findOnce().bounds()
                        if (aa.centerX() < 540 && aa.centerY() < 620 || aa.centerX() < 540 && aa.centerY() > 630 && aa.centerY() < 800) {
                            TKB.xgsrizhi(ss[j])
                            toastLog(ss[j])
                            sleep(3000)
                            fb = 1
                            x = 0
                            a = 0
                        }
                    } else if (ss[j].indexOf("上传失败") != -1) {
                        var aa = text(ss[j]).findOnce().bounds()
                        if (aa.centerX() < 540 && aa.centerY() < 620 || aa.centerX() < 540 && aa.centerY() > 630 && aa.centerY() < 800) {
                            TKB.xgsrizhi(ss[j])
                            sb++
                            if (sb > 2) {
                                TKB.xgsrizhi('上传失败')
                                click('删除')
                                sleep(1000)
                                if (text("保存到本地").exists() && text("确认放弃").exists() && text("取消").exists()) {
                                    TKB.xgsrizhi("发布")
                                    click("确认放弃")
                                    sleep(2000)
                                }
                                return false
                            } else {
                                click('重试')
                                sleep(2000)
                            }
                            sleep(3000)
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
//删除视频
function shipinsc() {
    log("视频删除")
    launch("com.ss.android.ugc.live")
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BD > 3 * 60 * 1000) {
            log("超时没在首页")
            TKB.killapp("抖音短视频")
            sleep(1000)
            launch("com.ss.android.ugc.live")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            log("超时退出")
            return false
        }
        try {
            if (desc('返回').exists() && id('com.ss.android.ugc.live:id/cmn').exists() && desc('输入评论').exists()) {
                desc('返回').findOnce().click()
                sleep(2000)
            }
            if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                log("首页")
                id('com.ss.android.ugc.live:id/ew').findOnce().parent().click()
                sleep(2000)
            }
            if (text('消息').exists() && text('搜索').exists() && text('钱包').exists() && text('进入我的主页').exists()) {
                log("主页")
                click('进入我的主页')
                sleep(2000)
            }
            zonghe()
            if (text('编辑资料').exists() && id('com.ss.android.ugc.live:id/dur').exists() && id('com.ss.android.ugc.live:id/e52').exists() || id('com.ss.android.ugc.live:id/e6e').exists() && id('com.ss.android.ugc.live:id/bjr').exists()) {
                log("我的界面")
                swipe(700, 1600, 700, 300, 800)
                sleep(1000)
                var ss = TKB.getAllTexts()
                for (var j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("作品 ") != -1) {
                        log(ss[j])
                        var st = ss[j].split("品 ")
                        var zpsl = st[1]
                        log("作品数量：" + zpsl)
                        if (zpsl == 0 && !text('草稿箱').exists() || zpsl == '0' && !text('草稿箱').exists()) {
                            log("已经删除完了")
                            sleep(1000)
                            back()
                            sleep(1000)
                            back()
                            sleep(1000)
                            return true
                        } else {
                            try {
                                var fg = (new Date()).getTime()
                                while (1) {
                                    if ((new Date()).getTime() - fg > 5 * 60 * 1000) {
                                        log("超时没删除完先退出")
                                        back()
                                        sleep(3000)
                                        back()
                                        sleep(3000)
                                        break
                                    }
                                    zonghe()
                                    if (text(ss[j]).exists()) {
                                        var dda = text(ss[j]).findOnce().bounds();
                                        log(dda)
                                        if (dda.centerY() > 0 && dda.centerY() < 1760) {
                                            log("点击第一个作品")
                                            click(dda.centerX() - 100, dda.centerY() + 100);
                                            sleep(2000)
                                        }
                                    }
                                    if (text('草稿箱').exists() && text('草稿箱视频在应用卸载后会被删除，请及时发布').exists()) {
                                        while (1) {
                                            if (text('草稿箱').exists() && text('草稿箱视频在应用卸载后会被删除，请及时发布').exists()) {
                                                log("本地草稿箱")
                                                click('选择')
                                                sleep(2000)
                                            }
                                            if (id("com.ss.android.ugc.live:id/ado").exists()) {
                                                var i = id("com.ss.android.ugc.live:id/ado").find()
                                                i.some(e => {
                                                    e.click()
                                                    sleep(500)
                                                })
                                                if (text('是否确定删除草稿').exists() && text('确定').exists()) {
                                                    log('确定删除')
                                                    click('确定')
                                                    sleep(1000)
                                                }
                                            } else if (text('暂无草稿').exists()) {
                                                log('删除完了')
                                                sleep(2000)
                                                back()
                                                sleep(2000)
                                                break
                                            }
                                        }
                                    }
                                    if (id('com.ss.android.ugc.live:id/bjz').exists() && id('com.ss.android.ugc.live:id/a0w').exists() && id('com.ss.android.ugc.live:id/cmn').exists()) {
                                        log("视频界面")
                                        click(980, 140)
                                        sleep(2000)
                                    }
                                    if (text('私信分享给好友').exists() && text('取消').exists() && text('私信').exists()) {
                                        log("删除界面")
                                        if (text("删除").exists()) {
                                            log("看到删除了")
                                            text('删除').findOnce().parent().click()
                                            sleep(2000)
                                        } else {
                                            log("找删除")
                                            swipe(900, 1600, 200, 1600, 500)
                                            sleep(2000)
                                        }
                                    }
                                    if (text('确定删除吗？').exists() && text("确定").exists() && text("取消").exists()) {
                                        log("确认删除")
                                        click("确定")
                                        sleep(3000)
                                        zpsl = Number(zpsl) - 1
                                        toastLog("还剩余个数" + zpsl)
                                        break
                                    }
                                    if (zpsl == 0 && !text('草稿箱').exists() || zpsl == '0' && !text('草稿箱').exists()) {
                                        log("已经删除完了")
                                        swipe(700, 300, 700, 1600, 800)
                                        sleep(1000)
                                        swipe(700, 300, 700, 1600, 800)
                                        sleep(1000)
                                        back()
                                        sleep(1000)
                                        back()
                                        sleep(1000)
                                        return true
                                    }
                                }
                            } catch (error) {
                                sleep(1001)
                                log(error);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

//点赞
function follow() {
    TKB.xgsrizhi("抖音火山版点赞");
    launch(dqbaoming)
    sleep(20000);
    var xs = TKB.zhid(sbip, run_id)
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        followUrl = xs['作品链接']
        TKB.xgsrizhi("获取到作品链接为" + followUrl)
    }
    // followUrl = "许洪昊Xu在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/wKlIhymdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // followUrl = "陳婷mm中午12点直播在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/4uWIT4D1na8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // followUrl = "奶龙在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/ljsxRbGdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    var startTime = (new Date()).getTime()
    var BD = (new Date()).getTime()
    var is_open = false
    setClip(followUrl)
    while (1) {
        try {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh("抖音短视频")
                sleep(1000)
                setClip(followUrl)
                sleep(3000)
                launch(dqbaoming)
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(dqbaoming);
                break;
            }
            if (text("打开看看").exists() && id("com.ss.android.ugc.live:id/ew").exists()) {
                click("打开看看")
                is_open = true
                TKB.xgsrizhi("点击打开看看");
                sleep(6000)
            }
            if (id("com.ss.android.ugc.live:id/bjy").exists() && id("com.ss.android.ugc.live:id/a0v").exists() && is_open == true) {
                TKB.xgsrizhi("进入到了作品页面");
                id("com.ss.android.ugc.live:id/bjz").findOnce().click()
                TKB.xgsrizhi("点赞");
                toast("点赞成功")
                sleep(3000)
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}

//评论
function comment() {
    TKB.xgsrizhi("抖音火山版评论");
    launch(dqbaoming)
    sleep(20000);
    var xs = TKB.zhid(sbip, run_id)
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        commentUrl = xs['作品链接'], comment_text = xs['话术']
        TKB.xgsrizhi("获取到作品链接为" + commentUrl)
        TKB.xgsrizhi("获取到话术为" + comment_text)
    }
    // followUrl = "许洪昊Xu在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/wKlIhymdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // commentUrl = "陳婷mm中午12点直播在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/4uWIT4D1na8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // followUrl = "奶龙在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/ljsxRbGdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // comment_text = "吃饭了吗"
    var startTime = (new Date()).getTime()
    var BD = (new Date()).getTime()
    var is_open = false,
        send_comment = false
    setClip(commentUrl)
    while (1) {
        try {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh("抖音短视频")
                sleep(1000)
                setClip(commentUrl)
                sleep(3000)
                launch(dqbaoming)
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(dqbaoming);
                break;
            }
            if (text("打开看看").exists() && id("com.ss.android.ugc.live:id/ew").exists()) {
                click("打开看看")
                is_open = true
                TKB.xgsrizhi("点击打开看看");
                sleep(6000)
            }
            if (id("com.ss.android.ugc.live:id/bjy").exists() && id("com.ss.android.ugc.live:id/a0v").exists() && is_open == true) {
                setClip(comment_text)
                TKB.xgsrizhi("输入评论");
                id("com.ss.android.ugc.live:id/a0w").findOnce().click()
                sleep(3000)
                id("com.ss.android.ugc.live:id/zx").findOnce().setText(comment_text)
                sleep(3000)
            }
            if (id("com.ss.android.ugc.live:id/a0e").exists() && id("com.ss.android.ugc.live:id/zx").exists()) {
                id("com.ss.android.ugc.live:id/a0e").findOnce().click()
                TKB.xgsrizhi("点击发送");
                send_comment = true
                sleep(3000)
            }
            if (send_comment == true) {
                TKB.xgsrizhi("评论成功")
                toast("点赞成功")
                back()
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}

//关注
function focuson() {
    TKB.xgsrizhi("抖音火山版关注");
    launch(dqbaoming)
    sleep(20000);
    var xs = TKB.zhid(sbip, run_id)
    if (xs['关注号/链接'] == undefined || xs['关注号/链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        focuson_obj = xs['关注号/链接']
        TKB.xgsrizhi("获取到关注号/链接为" + focuson_obj)
    }
    // focuson_obj = '1960378170'
    // focuson_obj = '2196311909'
    var focusonflag = false
    var focusont = 2
    var startTime = (new Date()).getTime()
    var BD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh("抖音短视频")
                sleep(1000)
                setClip(commentUrl)
                sleep(3000)
                launch(dqbaoming)
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(dqbaoming);
                break;
            }
            if (text("关注").exists() && text("视频").exists() && text("直播").exists()) {
                // id("com.ss.android.ugc.live:id/ew").findOnce().parent().click()
                click(75, 127)
                TKB.xgsrizhi("点击到个人主页");
                sleep(3000)
            }
            if (text("消息").exists() && text("搜索").exists() && text("钱包").exists()) {
                id("com.ss.android.ugc.live:id/csb").findOnce().click()
                TKB.xgsrizhi("点击搜索");
                sleep(6000)
            }
            if (textStartsWith("启动中").exists()) {
                sleep(15000)
                click("我知道了")
                TKB.xgsrizhi("点击我知道了");
            }
            if (TKB.zhaose("if isColor(448,139,0xf2f2f2,80) and isColor(465,140,0xf2f2f2,80) and isColor(536,135,0xf2f2f2,80) and isColor(580,133,0xf2f2f2,80) and isColor(633,119,0xf2f2f2,80) and isColor(696,148,0xf2f2f2,80) and isColor(729,138,0xf2f2f2,80) and isColor(817,139,0xf2f2f2,80) and isColor(857,168,0xf2f2f2,80) and isColor(886,139,0xf2f2f2,80) then")) {
                click(402, 140)
                TKB.xgsrizhi("进入搜索页，点击搜索栏");
                sleep(3000)
            }
            if (id("com.ss.android.ugc.live:id/hz").exists() && text("搜索").exists()) {
                id("com.ss.android.ugc.live:id/hz").findOnce().setText(focuson_obj)
                TKB.xgsrizhi("输入抖音号");
                sleep(3000)
                click("搜索")
                TKB.xgsrizhi("点击搜索");
                sleep(3000)
            }
            if (id("com.ss.android.ugc.live:id/aqz").exists() && text("关注").exists()) {
                id("com.ss.android.ugc.live:id/aqz").findOnce().click()
                TKB.xgsrizhi("点击关注");
                focusonflag = true
                sleep(3000)
            }
            if (text("综合").exists() && text("用户").exists() && text("已关注").exists()) {
                id("com.ss.android.ugc.live:id/js").findOnce().click()
                TKB.xgsrizhi("点击搜索到的用户");
                sleep(3000)
            }
            if (focusont < 0) {
                TKB.xgsrizhi("关注失败")
                toast("关注失败")
                TKB.qinglihh()
                return false
            }
            if (text("粉丝").exists() && text("关注").exists() && id("com.ss.android.ugc.live:id/an9").exists()) {
                id("com.ss.android.ugc.live:id/an9").findOnce().click()
                TKB.xgsrizhi("未关注上再次点击关注");
                sleep(3000)
                focusont--
                back()
                sleep(5000)
            }
            if (text("发私信").exists() || (focusonflag == true && text("发私信").exists())) {
                TKB.xgsrizhi("关注成功")
                toast("关注成功")
                sleep(3000)
                back()
                sleep(5000)
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if( files.exists("/sdcard/观沧海.mp3") == false){
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3",0.1,true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    TKB.xgsrizhi("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = false
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续火山任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                            // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()

                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************对接服务器*****************************************************************


function hszhixing() {
    try {
        bofangyy()
        TKB.xgsrizhi("执行抖音火山版")
        _THREADSSxx = threads.start(function() {
            var bb = TKB.getVerName("抖音火山版")
            if (bb != "9.1.5" && bb != false) {
                TKB.xgsrizhi("火山的版本不对")
                TKB.xiezai(dqbaoming)
            }
            var baom = getPackageName("抖音火山版")
            if (baom == null) {
                TKB.xgsrizhi("未安装抖音火山版")
                var bbd = TKB.wdjxiazai("抖音火山版", "9.1.5")
                if (bbd == false) {
                    TKB.xgsrizhi("安装抖音火山版不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                        //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var wb = hsdl()
            if (wb == true) {
                if (fun == "发布视频") {
                    fabusp()
                } else if (fun == "删除作品") {
                    shipinsc()
                } else if (fun == "修改资料") {
                    changeInfo()
                } else if (fun == "养号") {
                    hsyh()
                } else if (fun == "评论") {
                    comment()
                } else if (fun == "关注") {
                    focuson()
                } else if (fun == "点赞") {
                    follow()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
                // java.lang.System.exit(0);
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        TKB.xgsrizhi(error);
        TKB.cunqusj("jiaoben", "tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}


hszhixing()