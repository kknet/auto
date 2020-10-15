﻿log("tKB")
var TKB = require('/sdcard/tkb2.js')
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
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
var dqbaoming = "com.ss.android.article.video" //该项目包名
var xmxh = "30" //项目序号 版本11.0.0


var TKB = require('/sdcard/tkb2.js')

nc = ['Allen', 'Ava', 'Andy', 'Armstrong', 'Arnold', 'Adams', 'Alston', 'Albert', 'Ashley', 'Alison', 'Adkins', 'Anthony', 'Amos', 'Andrew', 'Archer', 'Augustine', 'Abbott', 'Abel', 'Abraham', 'Adair', 'Aldrich', 'Angel', 'Abernathy', 'Abrams', 'Acker', 'Ackerman', 'Adamson', 'Adcock', 'Adler', 'Alonso', 'Ali', 'Alonzo', 'Abra', 'Angle', 'Alger', 'Archibald', 'Armand', 'August', 'Abner', 'Adrian', 'Ahern', 'Alfred', 'Amy', 'Abbey', 'Abell', 'Abercrombie', 'Abernethy', 'Able', 'Abrahams', 'Abrahamson', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Abram', 'Abramson', 'Acheson', 'Acton', 'Acuff', 'Addington', 'Addy', 'Alfonso', 'Allan', 'Alton', 'Annabelle', 'Algernon', 'Alva', 'Alvin', 'Alvis', 'Andre', 'Angelo', 'Augus', 'Ansel', 'Antony', 'Antoine', 'Antonio', 'Aries', 'Arlen', 'Arno', 'Arvin', 'Asa', 'Ashbur', 'Atwood', 'Aaron', 'Adam', 'Adolph', 'Adonis', 'Alan', 'Abigail', 'Angela', 'Anna', 'Amanda', 'Ann', 'Alice', 'Andrea', 'Anne', 'Annie', 'Anita', 'Amber', 'April', 'Audrey', 'Annette', 'Ana', 'Alma', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Agnes', 'Arlene', 'Ada', 'Angie', 'Amelia', 'Alberta', 'Antoinette', 'Angelica', 'Adrienne', 'Alexandra', 'Angelina', 'Antonia', 'Alyssa', 'Aalto', 'Abadam', 'Abbado', 'Abbas', 'Abbe', 'Abbet', 'Abbs', 'Abby', 'Abdey', 'Abdie', 'Abdul', 'Abelard', 'Abelson', 'Abercromby', 'Aberdeen', 'Ableson', 'Ablett', 'Ablewhite', 'Ablitt', 'Ablott', 'Abrikosor', 'Absalom', 'Absolom', 'Absolon', 'Aby', 'Ace', 'Achard', 'Achebe', 'Achilles', 'Ackary', 'Ackerly', 'Ackers', 'Ackery', 'Acket', 'Acketts', 'Ackland', 'Ackroyd', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Acland', 'Acre', 'Acreman', 'Acres', 'Acroyd', 'Adah', 'Adcocks', 'Addams', 'Adderley', 'Addess', 'Addey', 'Addie', 'Addinsell', 'Addyman', 'Ade', 'Adeane', 'Adela', 'Adelaide', 'Adele', 'Adelina', 'Adeline', 'Adenauer', 'Ades', 'Adey', 'Adie', 'Adkin', 'Adlam', 'Adlard', 'Alexandr', 'Alfredo', 'Apollo', 'Aaliyah', 'Aamina', 'Aaryn', 'Abagail', 'Abbie', 'Abbigail', 'Abeille', 'Abigale', 'Abigayle', 'Abrianna', 'Abril', 'Acacia', 'Adaeze', 'Adaline', 'Adara', 'Adelaida', 'Adelia', 'Adell', 'Adella', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Adelle', 'Adesina', 'Adhrah', 'Aditi', 'Adn', 'Adriana', 'Adriane', 'Adrianna', 'Adrianne', 'Africa', 'Afshan', 'Agatha', 'Ageeth', 'Aggie', 'Ahli', 'Ahoo', 'Aidalyn', 'Aidee', 'Aileen', 'Aileena', 'Aileigh', 'Aimee', 'Ainhoa', 'Ainslee', 'Ainsley', 'Aisha', 'Aisling', 'Aitana', 'Aiyana', 'Aja', 'Ajaine', 'Akebulan', 'Akita', 'Alaa', 'Aladina', 'Alaina', 'Alaine', 'Alaja', 'Alana', 'Alanis', 'Alanna', 'Alanya', 'Alayna', 'Alaysia', 'Albany', 'Albertha', 'Albertine', 'Albina', 'Alda', 'Aldine', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aleah', 'Alecia', 'Aleece', 'Aleisha', 'Alejandra', 'Alejandrin', 'Aleksa', 'Alena', 'Alene', 'Alesha', 'Alesia', 'Alessandra', 'Aleta', 'Aleth', 'Aletha', 'Alexandrea', 'Alexandria', 'Alexia', 'Alexus', 'Alexys', 'Alfreda', 'Alia', 'Alicia', 'Alida', 'Aliece', 'Alina', 'Aline', 'Alinta', 'Alisa', 'Alisha', 'Alissa', 'Alivia', 'Alix', 'Aliya', 'Aliyah', 'Aliza', 'Alize', 'Alkhouri', 'Alla', 'Allegra', 'Allene', 'Alline', 'Allura', 'Ally', 'Allyson', 'Allyssa', 'Almeda', 'Almira', 'Almudena', 'Alona', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Alondra', 'Alrun', 'Alta', 'Altagracia', 'Altha', 'Althea', 'Alvena', 'Alvera', 'Alverta', 'Alvina', 'Alyana', 'Alyanna', 'Alyce', 'Alycia', 'Alyona', 'Alysa', 'Alyse', 'Alysha', 'Alysia', 'Alyson', 'Alysyn', 'Amalia', 'Amandeep', 'Amani', 'Amara', 'Amarantha', 'Amarha', 'Amaris', 'Amarlianna', 'Amaya', 'Amberleigh', 'Amberley', 'Amee', 'Amena', 'Amera', 'Amerbel', 'America', 'Ami', 'Amiciyah', 'Amie', 'Amira', 'Amparo', 'Amya', 'Anabel', 'Anahi', 'Anais', 'Anajah', 'Analise', 'Anastasia', 'Anaya', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Andreea', 'Andreina', 'Andreisha', 'Andreshia', 'Andria', 'Aneissa', 'Anele', 'Anessa', 'Anette', 'Angelia', 'Angelie', 'Angeline', 'Angelique', 'Angelita', 'Angharad', 'Anika', 'Anisah', 'Anise', 'Anissa', 'Anitra', 'Aniya', 'Aniyah', 'Anja', 'Anjali', 'Anjanette', 'Anjel', 'Anjelica', 'Ankie', 'Annabella', 'Annah', 'Annalee', 'Annalisa', 'Annalise', 'Annalouise', 'Annam', 'Annamae', 'Annamarie', 'Annelie', 'Annelies', 'Annemarie', 'Annetta', 'Annica', 'Annick', 'Annika', 'Annike', 'Annis', 'Anny', 'Anouk', 'Ansley', 'Antionette', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Antonetta', 'Antonette', 'Antonietta', 'Antonina', 'Antra', 'Anya', 'Aprille', 'Aqsa', 'Ara', 'Araceli', 'Aracelli', 'Aracely', 'Ardella', 'Ardene', 'Ardis', 'Ardith', 'Ardoryna', 'Areej', 'Areli', 'Arely', 'Aretha', 'Aria', 'Ariana', 'Arianna', 'Arianne', 'Ariella', 'Arielle', 'Arionna', 'Ariyana', 'Arleen', 'Arlett', 'Arline', 'Armida', 'Arnela', 'Aroha', 'Arole', 'Arrie', 'Arshia', 'Artary', 'Artilya', 'Aruma', 'Arvilla', 'Arya', 'Aryana', 'Aryanna', 'Asasia', 'Asdin', 'Asha', 'Ashanti', 'Ashely', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ashland', 'Ashlea', 'Ashlee', 'Ashleigh', 'Ashlie', 'Ashly', 'Ashlyn', 'Ashlynn', 'Ashra', 'Ashtyn', 'Asia', 'Asifa', 'Asma', 'Asmita', 'Aspen', 'Astrid', 'Asya', 'Atbar', 'Athena', 'Atiyah', 'Aubrie', 'Auburn', 'Audra', 'Auli', 'Aurora', 'Austra', 'Avril', 'Aya', 'Ayana', 'Ayanna', 'Aydn', 'Ayel', 'Ayesha', 'Ayla', 'Aylin', 'Ayra', 'Azeeza', 'Aziza', 'Azrael', 'Aariz', 'Abayomi', 'Abdiel', 'Abdullah', 'Abnir', 'Adalberto', 'Adan', 'Addrion', 'Adeel', 'Adelard', 'Adelbert', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Adolf', 'Adolfo', 'Adolphus', 'Adrain', 'Adriel', 'Adwan', 'Ady', 'Agustin', 'Ahmad', 'Ahmed', 'Ahmilliyon', 'Ajax', 'Akeem', 'Akira', 'Alando', 'Alberto', 'Albino', 'Alcino', 'Alden', 'Aldo', 'Aldrick', 'Alejandro', 'Alessandro', 'Alexandro', 'Alexzander', 'Alfie', 'Alfonzo', 'Alford', 'Algenis', 'Alijah', 'Alipio', 'Alistair', 'Allie', 'Allyn', 'Almond', 'Alois', 'Alonza', 'Aloysius', 'Alpha', 'Alphonse', 'Alphonso', 'Alvah', 'Alvaro', 'Alvie', 'Alxis', 'Amadeo', 'Amado', 'Amador', 'Amario', 'Amarlai', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ambrose', 'Americo', 'Amiel', 'Amil', 'Amit', 'Anakin', 'Anatoly', 'Anderson', 'Andra', 'Andreas', 'Andrey', 'Andrus', 'Anfernee', 'Angus', 'Anh', 'Anibal', 'Anirudh', 'Ankoma', 'Anselmo', 'Anson', 'Antonino', 'Antwan', 'Antwon', 'Anup', 'Anwar', 'Api', 'Apostolos', 'Aqib', 'Aramys', 'Arash', 'Arcadio', 'Archie', 'Archil', 'Aric', 'Arjun', 'Arkadiy', 'Arlan', 'Arley', 'Arlie', 'Arlis', 'Arlo', 'Armando', 'Armani', 'Armon', 'Armond', 'Arnab', 'Arnaldo', 'Arnie', 'Arnoldo', 'Arnulfo', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aron', 'Arron', 'Arsal', 'Arshad', 'Arther', 'Artie', 'Artis', 'Artur', 'Arturo', 'Arvel', 'Arvid', 'Arwin', 'Asbert', 'Aseem', 'Ashantio', 'Asher', 'Ashfaq', 'Ashton', 'Atlee', 'Atrayu', 'Atwoun', 'Audie', 'Augustus', 'Aurelio', 'Austen', 'Austin', 'Austyn', 'Avi', 'Avinav', 'Avram', 'Axel', 'Aydan', 'Ayden', 'Ayinde', 'Aylwin', 'Ayodeji', 'Ayrat', 'Ayrton', 'Abbyabbie', 'Ailsa', 'Aviva', 'Amei', 'Ahy', 'Ailing', 'Amarie', 'Ameiya', 'Aadilah', 'Aafke', 'Aaralyn', 'Aashka', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aastha', 'Abida', 'Adalyn', 'Adrianous', 'Aicha', 'Ailema', 'Aislinn', 'Aleasha', 'Alegria', 'Aleigha', 'Alethea', 'Alexiz', 'Alley', 'Alwyn', 'Amada', 'Amalie', 'Amberis', 'Anyea', 'Anadeli', 'Anaiah', 'Andee', 'Angeles', 'Angelika', 'Anneke', 'Annemarieke', 'Annemiek', 'Angelice', 'Annu', 'Aoife', 'Aoki', 'Arcelia', 'Areena', 'Ashaya', 'Ashunta', 'Aspasia', 'Assis', 'Asten', 'Audrea', 'Augustina', 'Avangaline', 'Aynur', 'Azia', 'Annzley', 'Aunjenae', 'Abeiku', 'Adin', 'Afonso', 'Afraz', 'Aidon', 'Ainsof', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Alejo', 'Alliance', 'Amadeus', 'Amine', 'Amr', 'Anastasios', 'Andijamo', 'Angoni', 'Antti', 'Arif', 'Artem', 'Asad', 'Ashwath', 'Aslan', 'Atik', 'Attah', 'Altair', 'Arnon', 'Adora', 'Aeola', 'Alleen', 'Althena', 'Amethyst', 'Albreto', 'Acher', 'Apona', 'Ardelle', 'Aura', 'Amity', 'Amon', 'Aristotle', 'Alesa', 'Alika', 'Alita', 'Akio', 'Alister', 'Almena', 'Annora', 'Alexandor', 'Aloha', 'Amina', 'Atman', 'Akako', 'Arnia', 'Arnice', 'Asisa', 'Aramis', 'Ayoka', 'Arabela', 'Atalanta', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aletheia', 'Alethia', 'Alien', 'Amigo', 'Anglie', 'Apple', 'Auguste', 'Aabagael', 'Aachbo', 'Aadam', 'Aadan', 'Aadesh', 'Aahna', 'Aailyaa', 'Aanisah', 'AdaLynn', 'Adonia', 'Ariel', 'Aba', 'Abina', 'Adalia', 'Ailis', 'Akili', 'Alanni', 'Aure ', 'Azura', 'Andres', 'Al', 'Amelie', 'Autumn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bennett', 'Bishop', 'Bradley', 'Baker', 'Bryant', 'Bryson', 'Baird', 'Baldwin', 'Barnett', 'Barry', 'Barton', 'Beck', 'Benjamin', 'Benson', 'Berg', 'Bernard', 'Bruce', 'Ballard', 'Bryan', 'Barlow', 'Baron', 'Bartley', 'Benedict', 'Brandon', 'Beverly', 'Bain', 'Bentley', 'Bancroft', 'Bart', 'Basil', 'Ben', 'Bertram', 'Bill', 'Brian', 'Billy', 'Baber', 'Bader', 'Baily', 'Bainbridge', 'Beenle', 'Barbie', 'Bubles', 'Bard', 'Barret', 'Bartholomew', 'Beacher', 'Beau', 'Berger', 'Bernie', 'Bert', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Berton', 'Bevis', 'Bing', 'Blair', 'Blithe', 'Bob', 'Booth', 'Borg', 'Boris', 'Bowen', 'Boyce', 'Boyd', 'Brady', 'Brook', 'Bruno', 'Buck', 'Burgess', 'Burke', 'Burnell', 'Burton', 'Byron', 'Barbara', 'Betty', 'Brenda', 'Bonnie', 'Beatrice', 'Bernice', 'Brittany', 'Beth', 'Bessie', 'Brandy', 'Billie', 'Becky', 'Bobbie', 'Belinda', 'Blanche', 'Beulah', 'Bridget', 'Blanca', 'Brooke', 'Bernadette', 'Betsy', 'Baal', 'Babbie', 'Babette', 'Babs', 'Babur', 'Bacchus', 'Bachelor', 'Bagot', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Baillie', 'Balaam', 'Baldie', 'Baldrick', 'Balfour', 'Babbette', 'Babsi', 'Bailee', 'Balbina', 'Baljinder', 'Balvina', 'Bambi', 'Barbaro', 'Barbra', 'Barra', 'Baseerat', 'Baylee', 'Beatriz', 'Beaulah', 'Bebe', 'Becca', 'Becci', 'Becka', 'Beena', 'Begona', 'Bekki', 'Bell', 'Bella', 'Bellamy', 'Belle', 'Belva', 'Benedicte', 'Benediz', 'Benita', 'Berenice', 'Berkeley', 'Bernadine', 'Bernardine', 'Berneice', 'Berniece', 'Bernita', 'Berta', 'Bertha', 'Bertie', 'Beryl', 'Beshaun', 'Bethel', 'Bettie', 'Bettina', 'Bettyann', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bettye', 'Beverlee', 'Beyonce', 'Bianca', 'Bibi', 'Billye', 'Bilqis', 'Bindi', 'Birdie', 'Bitch', 'Blendena', 'Blossom', 'Blythe', 'Bobbye', 'Bogusia', 'Bonita', 'Bonny', 'Bowyer', 'Brailyn', 'Branca', 'Brandee', 'Brandice', 'Brandie', 'Brandis', 'Breana', 'Breann', 'Breanna', 'Breanne', 'Bree', 'Brejai', 'Brenna', 'Breonna', 'Briana', 'Brianna', 'Brianne', 'Bridgett', 'Bridgette', 'Bridie', 'Brielle', 'Brigette', 'Brigitte', 'Brisa', 'Britany', 'Brithney', 'Britney', 'Britni', 'Brittani', 'Brittanie', 'Brittney', 'Brittni', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Brittny', 'Brogan', 'Bron', 'Bronwyn', 'Brooklynn', 'Brunilda', 'Bryana', 'Bryanna', 'Bryndan', 'Brynn', 'Bryony', 'Buelong', 'Buffy', 'Buick', 'Bulah', 'Bunni', 'Butch', 'Bahmann', 'Bama', 'Bany', 'Bao', 'Barbarino', 'Barkley', 'Barney', 'Barrett', 'Barron', 'Basel', 'Batman', 'Baxter', 'Bayden', 'Begongo', 'Bejay', 'Benio', 'Benito', 'Bennie', 'Benno', 'Benoit', 'Benton', 'Bernardo', 'Bernhard', 'Berry', 'Bertrand', 'Bertus', 'Bhavin', 'Bhinal', 'Biffo', 'Bilducia', 'Billybob', 'Bink', 'Blade', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Blaine', 'Blaise', 'Blayd', 'Blaze', 'Bodie', 'Bohao', 'Bojan', 'Bong', 'Boobs', 'Boots', 'Braden', 'Bradford', 'Bradly', 'Brado', 'Bradyn', 'Braeden', 'Braedon', 'Braiden', 'Bralin', 'Bram', 'Brandan', 'Branden', 'Brandt', 'Brandyn', 'Brannan', 'Brannon', 'Branson', 'Brant', 'Brantley', 'Braxton', 'Bray', 'Brayan', 'Brayden', 'Braydon', 'Brecken', 'Brendan', 'Brenden', 'Brendon', 'Brendt', 'Brennan', 'Brennen', 'Brennon', 'Brent', 'Brenton', 'Bret', 'Breven', 'Brice', 'Briere', 'Briggs', 'Bringle', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Broc', 'Brock', 'Brodie', 'Brody', 'Bromley', 'Brondon', 'Bronson', 'Brooks', 'Brown', 'Bruz', 'Bryce', 'Brycen', 'Bucs', 'Buda', 'Buddie', 'Buddy', 'Buford', 'Bufu', 'Bugzy', 'Burnsy', 'Beata', 'Bowie', 'Bosco', 'Bobo', 'Bondy', 'Bigs', 'Bowiet', 'Bacilio', 'Baltazar', 'Barrie', 'Bass', 'Bastian', 'Batool', 'Berend', 'Bernat', 'Bevan', 'Bimbo', 'Blayn', 'Bodhi', 'Bogdan', 'Bonifacio', 'BrayDyn', 'Brendin', 'Buster', 'Buzz', 'Babydoll', 'Bahar', 'Baukje', 'Beibei', 'Belem', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Carl', 'Carlos', 'Campbell', 'Carroll', 'Cole', 'Coleman', 'Caiden', 'Charles', 'Cain', 'Caldwell', 'Carlson', 'Carver', 'Clay', 'Clayton', 'Collier', 'Chloe', 'Chase', 'Cecil', 'Christopher', 'Clifford', 'Cornelius', 'Christy', 'Christie', 'Calvert', 'Carmichael', 'Cartwright', 'Cary', 'Cassidy', 'Castle', 'Chadwick', 'Chamberlain', 'Chappell', 'Clinton', 'Connor', 'Colton', 'Clyde', 'Carman', 'Celestine', 'Charley', 'Charlie', 'Columbus', 'Cory', 'Carson', 'Christal', 'Colorfully', 'Caesar', 'Calvin', 'Carey', 'Carr', 'Carter', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cash', 'Cedric', 'Chad', 'Channing', 'Chapman', 'Chasel', 'Chester', 'Christ', 'Clare', 'Clarence', 'Clark', 'Claude', 'Clement', 'Cleveland', 'Cliff', 'Colbert', 'Colby', 'Colin', 'Conrad', 'Cornell', 'Craig', 'Curitis', 'Cyril', 'Carol', 'Cynthia', 'Carolyn', 'Christine', 'Catherine', 'Cheryl', 'Christina', 'Crystal', 'Connie', 'Carmen', 'Cindy', 'Carrie', 'Charlotte', 'Clara', 'Cathy', 'Carla', 'Colleen', 'Constance', 'Claudia', 'Courtney', 'Caroline', 'Cassandra', 'Carole', 'Claire', 'Cora', 'Cecilia', 'Candace', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Candice', 'Cell', 'Chelsea', 'Cristina', 'Cecelia', 'Camille', 'Camilla', 'Catharine', 'Cecily', 'Chanel', 'Chauncey', 'Chuck', 'Cicely', 'Cinderella', 'Claudette', 'Claudine', 'Cleopatra', 'Colette', 'Collen', 'Candance', 'Cybelle', 'Cholena', 'Carlita', 'Carlina', 'Conan', 'Caton', 'Cleon', 'Cowan', 'Camey', 'Carling', 'Carmine', 'Carmelle', 'Cydney', 'Coryana', 'Corrinne', 'Cisca', 'Chynna', 'Chit', 'Cheyli', 'Cheree', 'Charysse', 'Chardonnay', 'Chapin', 'Cerys', 'Cequoyah', 'Celicia', 'Catlyn', 'Cathriona', 'Carys', 'Cammie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Camelot', 'Calantha', 'Cully', 'Cs', 'Constantine', 'Claus', 'Ciro', 'Cheo', 'Chelito', 'Cheech', 'Charsity', 'Charisma', 'Channa', 'Celtic', 'Celerino', 'Cassen', 'Cabot', 'Cabian', 'Cherrie', 'Chet', 'Chilam', 'Cosmo', 'Cheney', 'Corrine', 'Cloris', 'Cyrus', 'Cvetan', 'Curtis', 'Cullen', 'Ctace', 'Crow', 'Cristopher', 'Cristobal', 'Crispin', 'Crew', 'Cretcher', 'Creed', 'Creana', 'Cote', 'Cortez', 'Corjan', 'Cordell', 'Cooper', 'Conway', 'Conor', 'Conner', 'Colten', 'Colt', 'Colson', 'Colm', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cold', 'Codi', 'Cobby', 'Clio', 'Clifton', 'Claudio', 'Cisco', 'Chuckie', 'Chub', 'Christoper', 'Chokko', 'Chock', 'Chippy', 'Chico', 'Chesley', 'Chesdarith', 'Chechu', 'Chaz', 'Charalambos', 'Chandre', 'Chance', 'Chakiris', 'Chaim', 'Chadd', 'Cevin', 'Cesar', 'Cem', 'Celso', 'Cein', 'Cayden', 'Catlin', 'Cassio', 'Casper', 'Caspar', 'Carlyle', 'Carlton', 'Cantrell', 'Camron', 'Camren', 'Camden', 'Callum', 'Callan', 'Caleb', 'Cairns', 'CJ', 'Cyndy', 'Cyndi', 'Cristie', 'Cristiane', 'Cristal', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Crissy', 'Cosette', 'Corrie', 'Cornelia', 'Corliss', 'Corinne', 'Corinna', 'Corine', 'Corina', 'Corene', 'Cordie', 'Cordia', 'Cordelia', 'Corcoran', 'Coral', 'Consuelo', 'Conceicao', 'Collette', 'Coleen', 'Cloe', 'Cleta', 'Cleora', 'Clemmie', 'Clementine', 'Clementina', 'Clarissa', 'Clarine', 'Clarice', 'Claribel', 'Citlalli', 'Circe', 'Cinzia', 'Cindi', 'Cinda', 'Cierra', 'Ciera', 'Cielo', 'Ciarra', 'Ciara', 'Chyna', 'Chrystyna', 'Chrystal', 'Christiana', 'Christene', 'Christel', 'Christeen', 'Chrissy', 'Chiquita', 'Chiara', 'Chianti', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cheyenne', 'Cheyanne', 'Cheryle', 'Cherri', 'Cherise', 'Cherie', 'Chenille', 'Chelsie', 'Chelsi', 'Chaya', 'Chastity', 'Chasity', 'Chasidy', 'Charolette', 'Charmaine', 'Charly', 'Charlize', 'Charline', 'Charleen', 'Charla', 'Charisse', 'Charissa', 'Chantelle', 'Chantel', 'Chante', 'Chantal', 'Chaney', 'Chandi', 'Chanda', 'Chana', 'Celine', 'Celinda', 'Celina', 'Celica', 'Celia', 'Celeste', 'Celena', 'Ceanna', 'Caylin', 'Cayla', 'Catrina', 'Catina', 'Catia', 'Cathryn', 'Cathrine', 'Cathleen', 'Cathie', 'Cathi', 'Cathey', 'Caterina', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Catarina', 'Catalina', 'Cassius', 'Cassie', 'Cassia', 'Casandra', 'Caryn', 'Caryl', 'Caron', 'Carolynn', 'Carolina', 'Carolee', 'Carolann', 'Carmella', 'Carmelita', 'Carmela', 'Carlyn', 'Carlye', 'Carly', 'Carlotta', 'Carlie', 'Carli', 'Carley', 'Carlene', 'Carleen', 'Carlee', 'Carissa', 'Carisa', 'Caris', 'Carina', 'Carie', 'Cari', 'Caren', 'Careen', 'Cara', 'Candis', 'Candida', 'Camila', 'Camellia', 'Callie', 'Calli', 'Calista', 'Caleigh', 'Caitlynn', 'Caitlyn', 'Caitlin', 'Cailyn', 'Cady', 'Candy', 'Cassiel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Clint', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Davis', 'Dick', 'Duncan', 'Dunn', 'Daniel', 'David', 'Dean', 'Dennis', 'Douglas', 'Duke', 'Dalton', 'Davidson', 'Dillon', 'Donovan', 'Dorsey', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duran', 'Dyer', 'Dempsey', 'Derrick', 'Daly', 'Darby', 'Davies', 'Denny', 'Dewey', 'Doherty', 'Donnelly', 'Douglass', 'Drummond', 'Duff', 'Dunbar', 'Dunham', 'Dan', 'Diana', 'Don', 'Delia', 'Damon', 'Dane', 'Darwin', 'Deane', 'Desmond', 'Domingo', 'Dreamy', 'Darcy', 'Darnell', 'Darren', 'Dave', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Devin', 'Dominic', 'Donahue', 'Donald', 'Drew', 'Dwight', 'Dylan', 'Dorothy', 'Donna', 'Deborah', 'Debra', 'Diane', 'Doris', 'Denise', 'Dawn', 'Debbie', 'Danielle', 'Dolores', 'Delores', 'Dora', 'Deanna', 'Dianne', 'Daisy', 'Della', 'Dianna', 'Doreen', 'Desiree', 'Darla', 'Dixie', 'Danny', 'Dante', 'Daphne', 'Darcey', 'Davina', 'Debby', 'Deirdre', 'Delilah', 'Derek', 'Dinah', 'Dione', 'Dirk', 'Dolly', 'Dorothea', 'Diego', 'Dobias', 'Dmitry', 'Dirceu', 'Diogo', 'Dimitri', 'Dimigy', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Dillan', 'Diallo', 'Dexter', 'Devonte', 'Devic', 'Devendra', 'Devante', 'Deshawn', 'Deshaun', 'Derwin', 'Derron', 'Derrell', 'Dermot', 'Derico', 'Derick', 'Dereck', 'Derald', 'Deontrae', 'Deonte', 'Deondre', 'Denzel', 'Denton', 'Denicio', 'Demontay', 'Demetrius', 'DeMarcus', 'Delon', 'Delbert', 'Delano', 'Dejohn', 'Dejan', 'Deekay', 'Dedric', 'Declan', 'Decarlos', 'Debelen', 'Deaux', 'Deangelo', 'Deandre', 'Deakin', 'Dazz', 'Daylyn', 'Davy', 'Davonte', 'Davon', 'Davion', 'Daunte', 'Dathan', 'Dashul', 'Dashawn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Darryl', 'Darrow', 'Darrold', 'Darrius', 'Darrion', 'Darrin', 'Darrell', 'Darran', 'Darragh', 'Darion', 'Dario', 'Darin', 'Daren', 'Daquan', 'Danilo', 'Dangelo', 'Dandre', 'Damir', 'Damion', 'Damien', 'Damian', 'Damacio', 'Daimonn', 'Dacio', 'D baggio', 'D artagnan', 'Dyana', 'Dulce', 'Dottie', 'Dorie', 'Dominica', 'Dodie', 'Divine', 'Diedre', 'Destiny', 'Destini', 'Destiney', 'Destinee', 'Despina', 'Desirae', 'Denisse', 'Denine', 'Denali', 'Dena', 'Demetria', 'Delrae', 'Delma', 'Delisa', 'Deja', 'Deidre', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Deepa', 'Deena', 'Deedee', 'Deeann', 'Dedra', 'Debrah', 'Debi', 'Debera', 'Debbra', 'Deasia', 'Deanne', 'Deana', 'Dayna', 'Dayana', 'Dawna', 'Dasia', 'Darline', 'Darlene', 'Darleen', 'Daria', 'Darcie', 'Darci', 'Darchelle', 'Danyelle', 'Danna', 'Danita', 'Daniella', 'Daniela', 'Danica', 'Dania', 'Danette', 'Danelle', 'Danae', 'Damita', 'Damia', 'Damaris', 'Damali', 'Dalina', 'Dalia', 'Dalal', 'Daisha', 'Daina', 'Dagny', 'Dafne', 'Domenic', 'Domingos', 'Dominick', 'Dominik', 'Donavan', 'Donjite', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Donnie', 'Donte', 'Doron', 'Dougie', 'Draco', 'Draven', 'Drayden', 'Duane', 'Duarte', 'Duchenka', 'Dude', 'Durbin', 'Durron', 'Durward', 'Dustin', 'Duy', 'Dwayne', 'Dyante', 'Dylano', 'Dyllan', 'Dylon', 'Dextrad', 'Dicky', 'Delphine', 'Deanie', 'Dartagnan', 'Dbaggio', 'Dkasey', 'Dmarco', 'Daan', 'Daeden', 'Daio', 'Daron', 'Daymond', 'Dejesus', 'Delton', 'Delvin', 'Demond', 'Denizcan', 'Deundre', 'Devlin', 'Dharmesh', 'Dignus', 'Dimosthenes', 'Dreagon', 'Duba', 'Dadgy', 'Dadjiana', 'Daneel', 'Danitza', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Danuta', 'Dartainya', 'Daviyana', 'Dawnielle', 'Dequanna', 'Demara', 'Dennah', 'Desta', 'Devianna', 'Diandra', 'Djana', 'Dolors', 'Donita', 'Dreama', 'Dulcey', 'Dylisia', 'Deacon', 'Delmar', 'Derrica', 'Deniece', 'Doran', 'Duman', 'Dusan', 'Darrick', 'Dagna', 'Darah', 'Doug', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Emma', 'Ellis', 'Edith', 'Elliott', 'Ethan', 'Eaton', 'Everett', 'Edgar', 'Elliot', 'Early', 'Eddy', 'Edmond', 'Egan', 'Elias', 'Ellsworth', 'Elmore', 'Emery', 'Engle', 'Ennis', 'Ernst', 'Ervin', 'Erwin', 'Elmer', 'Elton', 'Emmanuel', 'Enoch', 'Ernest', 'Eugene', 'Evan', 'Evelyn', 'Elisa', 'Earle', 'Eddie', 'Elbert', 'Elwood', 'Emanuel', 'Emmett', 'Emory', 'Erlinda', 'Earl', 'Ed', 'Eden', 'Edmund', 'Edison', 'Edward', 'Edwiin', 'Egbert', 'Elijah', 'Elroy', 'Elvis', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Eric', 'Everley', 'Elizabeth', 'Emily', 'Edna', 'Ethel', 'Ellen', 'Elaine', 'Esther', 'Eva', 'Eleanor', 'Erin', 'Erica', 'Elsie', 'Eileen', 'Ella', 'Erika', 'Eunice', 'Erma', 'Ernestine', 'Elena', 'Estelle', 'Eloise', 'Elvira', 'Essie', 'Elsa', 'Ebony', 'Eda', 'Edwin', 'Effie', 'Eleanora', 'Eleanore', 'Elfreda', 'Elin', 'Elinor', 'Elisabeth', 'Elise', 'Elisha', 'Elissa', 'Ellie', 'Elma', 'Elmo', 'Eloisa', 'Else', 'Elva', 'Elvin', 'Emeline', 'Emerald', 'Emile', 'Emilia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Emmie', 'Emmitt', 'Ena', 'Enid', 'Ernie', 'Errol', 'Eve', 'Ebone', 'Eboni', 'Edwige', 'Edwina', 'Edyth', 'Eira', 'Ekaterina', 'Elaina', 'Elba', 'Elda', 'Eleni', 'Eleonore', 'Eleri', 'Elexis', 'Eliana', 'Eliane', 'Elina', 'Elke', 'Elora', 'Elvia', 'Elvina', 'Elysa', 'Elyse', 'Elyssa', 'Emely', 'Emilee', 'Emileigh', 'Emilie', 'Emmalee', 'Emmanuelle', 'Emmy', 'Emogene', 'Enola', 'Enriqueta', 'Enya', 'Eranthe', 'Ericka', 'Erlene', 'Erna', 'Eryn', 'Esin', 'Esmee', 'Esmeralda', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Esperanza', 'Essence', 'Estefania', 'Ester', 'Estrella', 'Evelia', 'Eveline', 'Evelyne', 'Evgenia', 'Evie', 'Ej', 'Eamon', 'Ean', 'Easton', 'Eben', 'Edgardo', 'Edson', 'Eduardo', 'Edzel', 'Eelko', 'Efrain', 'Efren', 'Eldad', 'Eleazar', 'Elie', 'Eliezer', 'Eliseo', 'Emiliano', 'Emilio', 'Emir', 'Enrico', 'Erasmo', 'Ercilien', 'Erickzon', 'Erkan', 'Ernesto', 'Esko', 'Eslie', 'Esteban', 'Estevan', 'Eurico', 'Eusebio', 'Everardo', 'Evin', 'Ewald', 'Ewan', 'Eyal', 'Eyron', 'Ezekiel', 'Ezequiel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ezra', 'Eudora', 'Endy', 'Eking', 'Evonne', 'Einar', 'Elco', 'Elden', 'Eldi', 'Eldian', 'Elric', 'Eluid', 'Engel', 'Enio', 'Enzo', 'Ermali', 'Esai', 'Evander', 'Evans', 'Evert', 'Ezro', 'Elahe', 'Elantra', 'Eleissa', 'Elida', 'Elysse', 'Emine', 'Enrica', 'Evangelia', 'Evangelina', 'Everlidis', 'Egon', 'Edda', 'Eagan', 'Edeline', 'Eugenia', 'Elson', 'Elston', 'Eula', 'Eric', 'Enrique', 'Earnest', 'Erick', 'Emelia', 'Evelynn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ford', 'Franklin', 'Fisher', 'Foster', 'Freeman', 'Frederica', 'Fitch', 'Fitzgerald', 'Francis', 'Frank', 'Farley', 'Farrell', 'Finley', 'Fleming', 'Fletcher', 'Flynn', 'Fowler', 'Franco', 'Frazier', 'Frost', 'Fuller', 'Fulton', 'Floyd', 'Frederick', 'Felix', 'Farrar', 'Faust', 'Felton', 'Field', 'Finn', 'Flint', 'Forbes', 'Fraser', 'Frey', 'Fritz', 'Funk', 'Forrest', 'Fabian', 'Flora', 'Freda', 'Faith', 'Felice', 'Fernando', 'Fairy', 'Flower', 'Ferdinand', 'Frederic', 'Florence', 'Felicia', 'Faye', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Fannie', 'Farrah', 'Fernanda', 'Flavia', 'Francesca', 'Freddie', 'Freddy', 'Frieda', 'Fabiana', 'Fabiola', 'Faline', 'Fallon', 'Farah', 'Farisa', 'Fatima', 'Fayetta', 'Febe', 'Felecia', 'Felicity', 'Femke', 'Ffion', 'Filipa', 'Fiona', 'Florine', 'Francine', 'Freya', 'Frida', 'Fritzi', 'Fabrice', 'Fabrizio', 'Facundo', 'Fahad', 'Fahim', 'Faizal', 'Fajar', 'Farhaad', 'Federico', 'Feicien', 'Felipe', 'Filimon', 'Filipe', 'Flavio', 'Flemming', 'Flex', 'Florentino', 'Florian', 'Follis', 'Fortunato', 'Francisco', 'Francois', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Frans', 'Franz', 'Fredrick', 'Fredy', 'Freestone', 'Frery', 'Fanny', 'Fermin', 'Finlay', 'Fadwa', 'Fawne', 'Faye', 'Filomena', 'Fleur', 'Floor', 'Flory', 'Francisca', 'Franka', 'Frosina', 'Fremont', 'Fontane', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Gordon', 'Gibson', 'Graham', 'Grant', 'George', 'Gilbert', 'Giles', 'Griffith', 'Guy', 'Gregory', 'Gallagher', 'Galloway', 'Garrett', 'Garrison', 'Greer', 'Guzman', 'Grayson', 'Gabriel', 'Gary', 'Gavin', 'Grover', 'Grace', 'Gage', 'Garnett', 'Godfrey', 'Godwin', 'Gore', 'Granger', 'Gregg', 'Gunter', 'Gabriella', 'Gerald', 'Gloria', 'Gayle', 'Garfield', 'Garth', 'Gerard', 'Gerry', 'Gillian', 'Glinda', 'Greenle', 'Gale', 'Geoffrey', 'Geoff', 'Glenn', 'Godfery', 'Greg', 'Gregary', 'Gustave', 'Gladys', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Geraldine', 'Gertrude', 'Gina', 'Georgia', 'Glenda', 'Gwendolyn', 'Geneva', 'Genevieve', 'Ginger', 'Gretchen', 'Gwen', 'Galen', 'Gaye', 'Gemma', 'Georgie', 'Germaine', 'Giovanna', 'Goldie', 'Greta', 'Gwyneth', 'Garrick', 'Gabriela', 'Gabrielle', 'Gaby', 'Gaia', 'Galilea', 'Genesis', 'Genica', 'Genna', 'Georgette', 'Georgina', 'Gerri', 'Gia', 'Giada', 'Gianna', 'Gigi', 'Gilda', 'Gilmore', 'Giorgia', 'Gisela', 'Giselle', 'Gisselle', 'Giulietta', 'Glory', 'Glynis', 'Goldia', 'Gracie', 'Graciela', 'Gretel', 'Griselda', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Gaelen', 'Gaetan', 'Gaige', 'Galo', 'Gambit', 'Gareth', 'Garett', 'Garic', 'Garon', 'Garry', 'Garza', 'Gaston', 'Gaven', 'Gavyn', 'Genaro', 'Geraldo', 'Gerardo', 'Gerasimos', 'Gerd', 'German', 'Gezi', 'Ghenadie', 'Giam', 'Giancarlo', 'Gianfranco', 'Gideon', 'Gijs', 'Gilberto', 'Gino', 'Giovani', 'Giovanni', 'Giovanny', 'Gligorea', 'Gman', 'Goncalo', 'Gonzalo', 'Gradus', 'Grady', 'Grandberry', 'Graydon', 'Greydon', 'Greyson', 'Grondall', 'Guero', 'Guilherme', 'Guillermo', 'Gunnar', 'Gunner', 'Gurneev', 'Guru', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Gustavo', 'Gyue', 'Gallen', 'Gabry', 'Gannon', 'Gap', 'Garvie', 'Geordie', 'Gezinus', 'Gizmo', 'Goran', 'Grolsch', 'Guillaume', 'Gunga', 'Gabreann', 'Gayaneh', 'Gaynor', 'Gea', 'Genie', 'Gennalee', 'Georgiann', 'Georgianna', 'Gerly', 'Giganni', 'Ginny', 'Gonnie', 'Gozde', 'Graciana', 'Gulsah', 'Gundela', 'Gypsy', 'Gita', 'Goldwin', 'Glen', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Isabella', 'Isla', 'Ingram', 'Isaac', 'Inman', 'Irvin', 'Irving', 'Irwin', 'Israel', 'Ivory', 'Ivy', 'Icey', 'Ian', 'Ingemar', 'Ira', 'Isidore', 'Ivan', 'Ives', 'Irene', 'Ida', 'Irma', 'Isabel', 'Iris', 'Inez', 'Ike', 'Ileana', 'Ilse', 'Imogene', 'Ines', 'Ingeborg', 'Inger', 'Ingrid', 'Iona', 'Isadora', 'Isaiah', 'Isis', 'Ismael', 'Ishtar', 'Iesha', 'Ilene', 'Iliana', 'Ilona', 'Imelda', 'Ina', 'India', 'Inka', 'Inmaculada', 'Iola', 'Irine', 'Irit', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jackson', 'Johnson', 'James', 'Jeanne', 'Joyce', 'Jarvis', 'Jefferson', 'Jacob', 'Jeffrey', 'John', 'Julian', 'Joy', 'Jacques', 'Jameson', 'Jarrett', 'Jeffery', 'Jewell', 'Jordon', 'Jace', 'Jessie', 'Jason', 'Jay', 'Jerry', 'Jim', 'Jonas', 'Joshua', 'Julius', 'Justin', 'Judy', 'June', 'Jeannie', 'Jose', 'Joe', 'Jayne', 'Jesus', 'Jone', 'Johnny', 'Jase', 'Jodie', 'Janice', 'Jack', 'Jared', 'Jeff', 'Jeremy', 'Jerome', 'Jonathan', 'Joseph', 'Jennifer', 'Jessica', 'Janet', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Julie', 'Joan', 'Judith', 'Jane', 'Jacqueline', 'Julia', 'Josephine', 'Juanita', 'Joanne ', 'Jill', 'Joann', 'Jeanette', 'Jo', 'Jennie', 'Jenny', 'Joanna', 'Jodi', 'Janie', 'Juana', 'Jeannette', 'Jacquelyn', 'Johnnie', 'Jasmine', 'Jana', 'Jenna', 'Josefina', 'Johanna', 'Jaime', 'Juan', 'Jacquetta', 'Jake', 'Janetta', 'Janey', 'Jaqueline', 'Jarred', 'Jarrod', 'Jed', 'Jeffry', 'Jenifer', 'Jerrold', 'Jewel', 'Jillian', 'Jimmie', 'Jimmy', 'Jocelyn', 'Joel', 'Joie', 'Jonah', 'Josiah', 'Josie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'JJ', 'Jaana', 'Jacalyn', 'Jacinda', 'Jackeline', 'Jacklyn', 'Jaclyn', 'Jacobi', 'Jadzia', 'Jaida', 'Jailyn', 'Jakayla', 'Jalyn', 'Jalynn', 'Janae', 'Janaya', 'Janeen', 'Janelle', 'Janessa', 'Janette', 'Janine', 'Janneke', 'Jasmina', 'Jasmyn', 'Jaycee', 'Jayda', 'Jayde', 'Jaye', 'Jayla', 'Jaylah', 'Jayna', 'Jazlyn', 'Jazmin', 'Jazmine', 'Jazmyn', 'Jazmyne', 'Jeanna', 'Jeannine', 'Jelena', 'Jena', 'Jenelle', 'Jenessa', 'Jennessa', 'Jeri', 'Jerri', 'Jerrica', 'Jerrie', 'Jerusha', 'Jesseka', 'Jessenia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jet', 'Jia', 'Jihan', 'Jimena', 'Joana', 'Joelle', 'Johana', 'Johnna', 'Jolanda', 'Joleen', 'Jolene', 'Jolie', 'Joni', 'Jonna', 'Jordana', 'Josalyn', 'Joselyn', 'Journey', 'Juliana', 'Julianna', 'Julianne', 'Juliet', 'Juliette', 'Julissa', 'Justina', 'Justyna', 'Jc', 'Jd', 'Jr', 'Jabari', 'Jacen', 'Jacoby', 'Jadon', 'Jaeden', 'Jagger', 'Jaheim', 'Jailen', 'Jaimel', 'Jair', 'Jairo', 'Jaison', 'Jakob', 'Jakobe', 'Jakyri', 'Jaleel', 'Jalon', 'Jamar', 'Jamarcus', 'Jamari', 'Jamel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jamesie', 'Jamielee', 'Jamil', 'Jaquan', 'Jarell', 'Jaren', 'Jari', 'Jarkko', 'Jarne', 'Jarno', 'Jarod', 'Jarom', 'Jaron', 'Jarryd', 'Jasen', 'Jatari', 'Jatavion', 'Jaume', 'Javarri', 'Javed', 'Javen', 'Javier', 'Javion', 'Javon', 'Jaxon', 'Jaxson', 'Jaydon', 'Jaylan', 'Jayleke', 'Jaylen', 'Jaylon', 'Jayson', 'Jayzon', 'Jeanluc', 'Jehovah', 'Jenito', 'Jenrry', 'Jequil', 'Jeren', 'Jermey', 'Jeroen', 'Jeruh', 'Jessy', 'Jethro', 'Jett', 'Jevandyr', 'Jevon', 'Jianzhong', 'Jide', 'Jimi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jinks', 'Jjon', 'Josavion', 'Joachim', 'Joao', 'Joaquin', 'Jocke', 'Johansen', 'Johnathan', 'Johnathon', 'Johnno', 'Joker', 'Jomar', 'Jonathon', 'Jonny', 'Joost', 'Jorden', 'Jordy', 'Jorge', 'Jorgen', 'Joris', 'Jorne', 'Josue', 'Jothy', 'Joure', 'Jovan', 'Jovani', 'Jovanny', 'Jovany', 'Jovino', 'Jsonin', 'Judah', 'Juergen', 'Jujuan', 'Julien', 'Julio', 'Junior', 'Justus', 'Jyrikc', 'Jenny jennie', 'Jacky', 'Jabe', 'Jabriel', 'Jaiah', 'Jamahd', 'Jamo', 'Jamychal', 'Jarin', 'Jassir', 'Javarion', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Javu', 'Jawara', 'Jaxom', 'Jaymz', 'Jeandre', 'Jelani', 'Jelle', 'Jemario', 'Jenks', 'Jentrey', 'Jeordie', 'Jerold', 'Jeronimo', 'Jerrell', 'Jerrod', 'Jesper', 'Jestek', 'Jevaris', 'Jobon', 'Joelo', 'Johntify', 'Jono', 'Joop', 'Joran', 'Jorben', 'Joslain', 'Jostin', 'Josuan', 'Joven', 'Juca', 'Judd', 'Jbreauna', 'Jacarri', 'Jacinta', 'Jadi', 'Jadmalys', 'Jaduiga', 'Jahmilia', 'Jahnae', 'Jaialea', 'Jakerra', 'Jaleesa', 'Jamisen', 'Janai', 'Jandi', 'Janela', 'Janique', 'Janira', 'Jannemarij', 'Jannery', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jarrisha', 'Jasmynne', 'Jaygee', 'Jaynie', 'Jazdia', 'Jeanique', 'Jemila', 'Jenae', 'Jenai', 'Jenan', 'Jenine', 'Jennine', 'Jeralyn', 'Jermeka', 'Jerzie', 'Jimmia', 'Jinette', 'Jitske', 'Joneshia', 'Jonlys', 'Jonneke', 'Jordanne', 'Jordi', 'Jovelynn', 'Jowanna', 'Jarda', 'Jerica', 'Juliane', 'Joycelyn', 'Joline', 'Jamila', 'Jonina', 'Jocasta', 'Jeanie', 'Jerod', 'Jammy', 'Jannet', 'Jessey', 'Jingle', 'Jiro', 'Jacko', 'Jyotsna', 'Jam Hsiao', 'Joliet', 'Jon', 'Jeremiah', 'Jerald', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'King', 'Kevin', 'Kelley', 'Knight', 'Khaleesi', 'Kent', 'Kerr', 'Kirk', 'Keith', 'Kane', 'Kemp', 'Key', 'Kirby', 'Klein', 'Knox', 'Kyle', 'Kay', 'Kearney', 'Keen', 'Kendrick', 'Kenney', 'Kenny', 'Kern', 'Kimbrough', 'Kincaid', 'Kinsey', 'Kirkland', 'Karl', 'Kaye', 'Ken', 'Kennedy', 'Kenneth', 'Kerwin', 'Karen', 'Kathleen', 'Katherine', 'Kathy', 'Kathryn', 'Katie', 'Kristen', 'Kristin', 'Kristina', 'Katrina', 'Kayla', 'Kristine', 'Kristy', 'Kelli', 'Kara', 'Krista', 'Kendra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Krystal', 'Kari', 'Kerry', 'Kate', 'Kellie', 'Kristie', 'Kaley', 'Karan', 'Karin', 'Karla', 'Karol', 'Katharine', 'Kathie', 'Katy', 'Keely', 'Kelvin', 'Kendal', 'Kenna', 'Kenton', 'Kenyatta', 'Kermit', 'Kimberley', 'Kimberly', 'Kirsten', 'Kit', 'Kittie', 'Kitty', 'Kennard', 'Kaitlyn', 'Kiara', 'Kaci', 'Kacie', 'Kaela', 'Kaelyn', 'Kaia', 'Kail', 'Kaila', 'Kailee', 'Kailey', 'Kailyn', 'Kaitlan', 'Kaitleen', 'Kaitlin', 'Kaitlynn', 'Kaiya', 'Kajal', 'Kala', 'Kaleigh', 'Kaliyah', 'Kallie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kalyn', 'Kamryn', 'Kandi', 'Kandie', 'Karel', 'Karima', 'Karina', 'Karis', 'Karissa', 'Karlee', 'Karlene', 'Karley', 'Karli', 'Karlie', 'Karly', 'Karma', 'Karolyn', 'Karyn', 'Kasandra', 'Kasi', 'Kasia', 'Kassandra', 'Kassidy', 'Katarina', 'Katelin', 'Katelyn', 'Katelynn', 'Katerina', 'Katia', 'Katina', 'Katja', 'Katrien', 'Katya', 'Kaya', 'Kaylah', 'Kaylee', 'Kayleigh', 'Kayley', 'Kayli', 'Kaylie', 'Kaylyn', 'Kaylynn', 'Keanna', 'Keara', 'Keila', 'Keisha', 'Kelsi', 'Kelsie', 'Kenia', 'Kerenza', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kerrie', 'Kerstin', 'Keshia', 'Keyanna', 'Keyara', 'Keyla', 'Kezia', 'Khadijah', 'Khalifa', 'Kiana', 'Kiandra', 'Kianna', 'Kiera', 'Kierra', 'Kiersten', 'Kiki', 'Kiley', 'Kimora', 'Kira', 'Kiri', 'Kirima', 'Kirsteen', 'Kirsty', 'Kora', 'Kori', 'Krischelle', 'Kristan', 'Kristyn', 'Krystina', 'Krystle', 'Ksenia', 'Kusum', 'Kya', 'Kyla', 'Kylee', 'Kyleigh', 'Kyra', 'Kyung', 'Kaden', 'Kage', 'Kahill', 'Kaleb', 'Kaleija', 'Kalon', 'Kalvin', 'Kamph', 'Kamron', 'Kanan', 'Kareem', 'Karisma', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Karry', 'Karson', 'Kashif', 'Kavaljit', 'Kavon', 'Kayden', 'Kayin', 'Kazi', 'Keagan', 'Kealoha', 'Keegan', 'Keenan', 'Keian', 'Keiran', 'Kelon', 'Kelton', 'Kenan', 'Kenori', 'Kensy', 'Keon', 'Keong', 'Kershwyn', 'Kert', 'Keshaun', 'Keshawn', 'Keven', 'Kevon', 'Keyon', 'Keyshawn', 'Khai', 'Khail', 'Khalid', 'Khalil', 'Khaliq', 'Khurram', 'Kiddo', 'Kiel', 'Kingsley', 'Kip', 'Kittisak', 'Koa', 'Kobe', 'Koby', 'Kodi', 'Kody', 'Kohan', 'Kolby', 'Kole', 'Kondi', 'Konstantin', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Koos', 'Korbin', 'Korey', 'Korrigan', 'Kortez', 'Koyzell', 'Kraig', 'Kralin', 'Kristofer', 'Kristopher', 'Kurt', 'Kurtis', 'Kurtisrae', 'Kwadir', 'Kye', 'Kylan', 'Kyo', 'Kyree', 'Kyros', 'Karida', 'Kathykathie', 'Kaykaye', 'Kishi', 'Keving', 'Kennybee', 'Kenji', 'Kaimen', 'Karwai', 'Karena', 'Kadeem', 'Kaedyn', 'Kalem', 'Karteous', 'Kavir', 'Kc', 'Kedren', 'Kees', 'Keifer', 'Kepuhi', 'Ketan', 'Khari', 'Kieron', 'Kimmo', 'Kio', 'Kiril', 'Kirsanoff', 'Kirt', 'Kitrick', 'Knud', 'Koen', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kosta', 'Kyren', 'Kimoni', 'Kaeley', 'Kaisha', 'Kajsa', 'Kameo', 'Kamla', 'Kanequa', 'Karenah', 'Karice', 'Karinda', 'Karine', 'Kariyah', 'Kariz', 'Karlyn', 'Karyssa', 'Katrianna', 'Kaula', 'Kawana', 'Kaylia', 'Kearen', 'Keilani', 'Keita', 'Kenlyn', 'Kennisis', 'Kersha', 'Khailene', 'Khloe', 'Kiany', 'Kilianne', 'Kimmy', 'Kinty', 'Kinza', 'Kirri', 'Kirstie', 'Kourtlyn', 'Kramie', 'Kristal', 'Kristiina', 'Krystani', 'Krysten', 'Kyanna', 'Kysharnie', 'Kadar', 'Kamea', 'Kimi', 'Kisa', 'Keli', 'Kayne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kado', 'Kerk', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lewis', 'Lawrence', 'Lilith', 'Larissa', 'Lambert', 'Leonard', 'Lester', 'Lora', 'Lang', 'Lara', 'Larson', 'Leon', 'Lloyd', 'Lucas', 'Lance', 'Louis', 'Luther', 'Lyle', 'Lacey', 'Lacy', 'Ladd', 'Laird', 'Lange', 'Langston', 'Larkin', 'Latham', 'Lawler', 'Lay', 'Layne', 'Layton', 'Libby', 'Lilly', 'Lincoln', 'Linn', 'Landon', 'Liam', 'Lorenzo', 'Larry', 'Leo', 'Levi', 'Lucy', 'Lillie', 'Lamont', 'Laurence', 'Leland', 'Lenard', 'Leroy', 'Luis', 'Leif', 'Len', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennon', 'Leopold', 'Les', 'Lionel', 'Lucien', 'Lyndon', 'Linda', 'Lisa', 'Laura', 'Lori', 'Louise', 'Lois', 'Lillian', 'Lucille', 'Lauren', 'Lorraine', 'Loretta', 'Laurie', 'Lydia', 'Lena', 'Leah', 'Leona', 'Lindsey', 'Lindsay', 'Lynda', 'Luz', 'Lula', 'Lola', 'Latoya', 'Lynne', 'Leticia', 'Lynette', 'Laverne', 'Lorena', 'Lila', 'Lana', 'Lorene', 'Lucia', 'Lela', 'Lanny', 'Latonia', 'Laurel', 'Lauretta', 'Laurinda', 'Lavinia', 'Lean', 'Leda', 'Leila', 'Leilani', 'Lemuel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennie', 'Lenny', 'Lenora', 'Lenore', 'Leonie', 'Leonora', 'Leonore', 'Letitia', 'Lettie', 'Letty', 'Lili', 'Lily', 'Lina', 'Lindy', 'Linsey', 'Ladonna', 'Lashay', 'Lachelle', 'Lacie', 'Laila', 'Laine', 'Lainey', 'Lakeisha', 'LaKeydra', 'Lakita', 'Lal', 'Laney', 'Lanita', 'LaQuisha', 'Laquita', 'Larisa', 'Latifah', 'Latika', 'Latina', 'Latisha', 'Latricia', 'Lauran', 'Laureen', 'Lauryn', 'Lavina', 'Lavon', 'Lavonne', 'Lawanda', 'Layla', 'Layna', 'Leann', 'Leala', 'Leandra', 'Leanna', 'Leanne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leeann', 'Leesa', 'Leia', 'Leisa', 'Leisha', 'Leota', 'Lesly', 'Lexi', 'Lexie', 'Lia', 'Lian', 'Liana', 'Liang', 'Lianne', 'Lida', 'Lidia', 'Liliana', 'Lilliana', 'Limei', 'Linaeve', 'Linnea', 'Linnie', 'Lisandra', 'Lisette', 'Lita', 'Litzy', 'Liz', 'Liza', 'Lizabeth', 'Lizbeth', 'Lizeth', 'Lizette', 'Lizzie', 'Lolita', 'Loma', 'Lona', 'Lorenza', 'Lorinda', 'Lorna', 'Lorrie', 'Lotte', 'Lottie', 'Louisa', 'Lourdes', 'Luana', 'Lucija', 'Lucinda', 'Ludmila', 'Lulu', 'Luna', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lupita', 'Lurdes', 'Lux', 'Lyna', 'Lyndi', 'Lynnette', 'Lynsey', 'Lacorey', 'Laithan', 'Lamar', 'Lampros', 'Lardy', 'Latrell', 'Lawther', 'Lequeint', 'Levone', 'Leandro', 'Lefteris', 'Legend', 'Lenual', 'Leonardo', 'Leonel', 'Liandre', 'Lidong', 'Liem', 'Lijun', 'Likiak', 'Limie', 'Lleyton', 'Lockie', 'Lorcan', 'Lorry', 'Lotkova', 'Lotta', 'Loudyn', 'Lova', 'Lucah', 'Luciano', 'Ludwig', 'Lukas', 'Luke', 'Lytle', 'Lareina', 'Lucine', 'Leehom', 'Lasse', 'Laval', 'Leighton', 'Leitham', 'Lemar', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leyam', 'Liberio', 'Livio', 'Lohan', 'Lowell', 'Lafreeta', 'Lakida', 'Lakisha', 'Laniece', 'Laquinta', 'LaQunda', 'Lashanda', 'LaSondra', 'Laurabeth', 'Laurice', 'Leshawn', 'Leany', 'Leeandra', 'Lenaya', 'Lene', 'Lera', 'Lexy', 'Liat', 'Liesa', 'Ligia', 'Lindie', 'Linef', 'Lisanne', 'Loanda', 'Loann', 'Lonneke', 'Luisa', 'Luquasha', 'Luv', 'Luzia', 'Lynndette', 'Leyla', 'Lorada', 'Lyanna', 'Lykke', 'Lennor', 'Lynch', 'Luthur', 'Lala', 'Lamond', 'Lissa', 'Licia', 'Leor', 'Leron', 'Lukman', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lyron', 'Limber', 'Levana', 'Lesa', 'Liliy', 'Loletta', 'Lassie', 'Loren', 'Lilia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Martin', 'Moore', 'Mary', 'Marshall', 'Murphy', 'Murray', 'Mason', 'Mitchell', 'Morris', 'Moon', 'Marsh', 'Maxwell', 'Michael', 'Miles', 'Morton', 'Moses', 'May', 'MacDonald', 'Mack', 'Maddox', 'Mann', 'Mathews', 'Maynard', 'Magee', 'Malcolm', 'Marcus', 'Mark', 'Marvin', 'Matthew', 'Mahoney', 'Major', 'Mallory', 'Malloy', 'Maloney', 'Manley', 'Mansfield', 'Manuel', 'Marin', 'Marquis', 'Mayfield', 'Maria', 'Matt', 'Maurice', 'Max', 'Mike', 'Milo', 'Melinda', 'Mercedes', 'Macy', 'Malcom', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcellus', 'Marlin', 'Marvel', 'Mathew', 'Mya', 'Magical', 'Mandel', 'Marico', 'Marlon', 'Maximilian', 'Merlin', 'Michell', 'Mick', 'Montague', 'Mortimer', 'Myron', 'Madison', 'Michelle', 'Melissa', 'Martha', 'Marie', 'Mildred', 'Marilyn', 'Marjorie', 'Monica', 'Marion', 'Melanie', 'Maureen', 'Marcia', 'Minnie', 'Marlene', 'Marian', 'Maxine', 'Mabel', 'Marsha', 'Margie', 'Miriam', 'Misty', 'Mae', 'Margarita', 'Marguerite', 'Molly', 'Madeline', 'Monique', 'Maggie', 'Maryann', 'Melody', 'Mamie', 'Marianne', 'Myra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcella', 'Mona', 'Meghan', 'Mindy', 'Mandy', 'Mirana', 'Marta', 'Mac', 'Madeleine', 'Madge', 'Madonna', 'Magda', 'Magdalen', 'Magnolia', 'Maisie', 'Malvina', 'Margaret', 'Marge', 'Margery', 'Margot', 'Mariana', 'Marietta', 'Marina', 'Marjory', 'Marnie', 'Mathilda', 'Matilda', 'Maud', 'Maude', 'Maura', 'Mavis', 'Michaela', 'Macarena', 'Machelle', 'Maci', 'Madai', 'Madalena', 'Madalyn', 'Madalynn', 'Maddison', 'Madelyn', 'Madelyne', 'Madelynn', 'Madilyn', 'Madisen', 'Madisyn', 'Madyson', 'Maegan', 'Maeve', 'Mafalda', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Magdalena', 'Maia', 'Maile', 'Maite', 'Makaila', 'Makayla', 'Makenna', 'Makenzie', 'Maleah', 'Malia', 'Malina', 'Malinda', 'Malissa', 'Mammie', 'Manasi', 'Manisha', 'Manuela', 'Mara', 'Maranda', 'Marcelle', 'Marcie', 'Mardi', 'Margret', 'Mariah', 'Mariam', 'Marianna', 'Maribel', 'Maricela', 'Mariel', 'Mariela', 'Marielle', 'Marilou', 'Marisa', 'Marisha', 'Marisol', 'Marissa', 'Marit', 'Marita', 'Maritza', 'Marla', 'Marlea', 'Marlee', 'Marleigh', 'Marlena', 'Martie', 'Martina', 'MaryEllen', 'Marylou', 'Marzia', 'Matilde', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Maya', 'Mayra', 'Mckayla', 'Meadow', 'Meagan', 'Meaghan', 'Megan', 'Meggan', 'Mei', 'Melany', 'Melba', 'Melina', 'Mena', 'Mercy', 'Mia', 'Miah', 'Mica', 'Micaela', 'Micki', 'Micole', 'Mikaela', 'Mikaila', 'Mikayla', 'Mikhaela', 'Millicent', 'Millie', 'Milly', 'Mimi', 'Mina', 'Minna', 'Miranda', 'Mireille', 'Mireya', 'Mirja', 'Mirna', 'Mirta', 'Miruna', 'Missy', 'Mitra', 'Mitzi', 'Moa', 'Moana', 'Moira', 'Mollie', 'Monserrat', 'Morag', 'Moriah', 'Mumtaz', 'Myah', 'Mycala', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Mustafa', 'Mustaqim', 'Muzafer', 'Mynor', 'Maahier', 'Machai', 'Mads', 'Magezi', 'Magnus', 'Mahmut', 'Maika', 'Majid', 'Makana', 'Malachi', 'Malakai', 'Malaki', 'Maldwyn', 'Maliq', 'Manfred', 'Manny', 'Marquale', 'Marac', 'Marcelo', 'Marcen', 'Mareks', 'Mariano', 'Markel', 'Marko', 'Markus', 'Marne', 'Marquice', 'Marquise', 'Martinho', 'Martinus', 'Marty', 'Martyn', 'Masuma', 'Mateo', 'Matrix', 'Matteo', 'Mattew', 'Matthijs', 'Mattia', 'Mauricio', 'Maxell', 'Maximillia', 'Maximus', 'Maxximillian', 'Mayed', 'Mckittrick', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Mehieddin', 'Mekhi', 'Meldon', 'Melton', 'Melvin', 'Menace', 'Meng', 'Menno', 'Merck', 'Merryc', 'Mervin', 'Merwin', 'Metcalfe', 'Michaelynn', 'Mickael', 'Miguel', 'Mihai', 'Mikade', 'Mikel', 'Mikhail', 'Mikola', 'Millard', 'Milosh', 'Milton', 'Mingo', 'Minh', 'Mircea', 'Miro', 'Misael', 'Mishan', 'Mitch', 'Mitchel', 'Moe', 'Mohamed', 'Mohammad', 'Mohammed', 'Mohannad', 'Mohsen', 'Moises', 'Montavious', 'Montgomery', 'Monty', 'Morten', 'Mosby', 'Moshe', 'Muhammad', 'Murali', 'Musa', 'Miya', 'Mahlon', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Makanalani', 'Malifadza', 'Malte', 'Mane', 'Mansing', 'Marcio', 'Marius', 'Marlindi', 'Marnix', 'Marquinn', 'Maurits', 'Mauro', 'Mckaulie', 'Meeko', 'Melz', 'Miika', 'Miroslav', 'Mollica', 'Montego', 'Monya', 'Mourad', 'Moustapha', 'Munem', 'Mushu', 'Maaike', 'Madaleine', 'Maddie', 'Maddy', 'Maeoh', 'Magalie', 'Magen', 'Maison', 'Maja', 'Makyia', 'Makynlee', 'Maleiah', 'Malene', 'Mamura', 'Manelle', 'Manette', 'Manon', 'Marea', 'Marilee', 'Maritess', 'Marjon', 'Markie', 'Marloes', 'Marrisa', 'Martiqua', 'Marwa', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Nelson', 'Noah', 'Natasha', 'Newman', 'Norman', 'Norton', 'Natalie', 'Nash', 'Neal', 'Newton', 'Nixon', 'Noble', 'Nolan', 'Norris', 'Neil', 'Nicholas', 'Naylor', 'Neely', 'Neville', 'Newell', 'Norwood', 'Nathan', 'Nathaniel', 'Nick', 'Napoleon', 'Nestor', 'Nicolas', 'Normand', 'Nancy', 'Nat', 'Nigel', 'Nicole', 'Norma', 'Nellie', 'Nora', 'Nina', 'Naomi', 'Nadine', 'Nettie', 'Nana', 'Nanette', 'Nannie', 'Natalia', 'Nathalie', 'Nathanael', 'Ned', 'Nelly', 'Nicola', 'Nicolette', 'Nicolle', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Nita', 'Nola', 'Nona', 'Norah', 'Noreen', 'Norene', 'Nabila', 'Nadia', 'Nafeeza', 'Nailah', 'Nalani', 'Nallely', 'Nanci', 'Nancie', 'Nani', 'Nannette', 'Narcisa', 'Narelle', 'Nasrin', 'Nataly', 'Natalya', 'Nathalia', 'Nathaly', 'Naya', 'Nayeli', 'Nayely', 'Neha', 'Neli', 'Nerissa', 'Nesha', 'Nessa', 'Neta', 'Neva', 'Nevaeh', 'Nia', 'Nichelle', 'Nicki', 'Nickole', 'Nicky', 'Nidia', 'Nieves', 'Niki', 'Nikka', 'Nikki', 'Nikola', 'Ninon', 'Nisa', 'Nitsa', 'Noelia', 'Noemi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Noga', 'Nokomis', 'Noriko', 'Nour', 'Nubia', 'Nuria', 'Nya', 'Nyah', 'Nyasia', 'Nyla', 'Nyree', 'Nadav', 'Nadir', 'Nafis', 'Nahoom', 'Naku', 'Namit', 'Nanda', 'Naquay', 'Narain', 'Narong', 'Nasir', 'Nassef', 'Nate', 'Nathanial', 'Nathen', 'Neath', 'Nehemiah', 'Nery', 'Nickolas', 'Nikhil', 'Nikolas', 'Niles', 'Nils', 'Nokovic', 'Nollie', 'Norberto', 'Noriel', 'Nuen', 'Nunez', 'Nuno', 'Nyle', 'Nacho', 'Najae', 'Nando', 'Nassim', 'Neandro', 'Neelix', 'Negro', 'Nemanja', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Nerendra', 'Nezra', 'Nichlas', 'Nicklas', 'Nikos', 'Nivaldo', 'Norvin', 'Nadage', 'Naheel', 'Nairobi', 'Nakoma', 'Nanlin', 'Nydia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Olivia', 'Oliver', 'Owen', 'Osborn', 'Olga', 'Odom', 'Ogden', 'Otto', 'Oakes', 'Oakley', 'Orlando', 'Oscar', 'Omar', 'Orville', 'Osmond', 'Oswald', 'Otis', 'Opal', 'Octavia', 'Odette', 'Olympia', 'Ophelia', 'Orval', 'Odalys', 'Oksana', 'Olimpia', 'Oliviana', 'Omaira', 'Orietta', 'Orlina', 'Obed', 'Octavio', 'Oden', 'Ody', 'Oggy', 'Oleg', 'Oluwatosin', 'Omari', 'Omarian', 'Omarion', 'Ompaa', 'Osa', 'Osamah', 'Osvaldo', 'Oswaldo', 'Ottis', 'Olina', 'Oprah', 'Obidinma', 'Olee', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Parker', 'Payne', 'Perry', 'Porter', 'Palmer', 'Peterson', 'Phillips', 'Powell', 'Page', 'Patrick', 'Paul', 'Parrish', 'Patton', 'Pearson', 'Petty', 'Phelps', 'Pollard', 'Pope', 'Potter', 'Prescott', 'Padgett', 'Paige', 'Parr', 'Patten', 'Paz', 'Pearce', 'Phipps', 'Pierre', 'Pierson', 'Pike', 'Piper', 'Platt', 'Pollock', 'Pete', 'Peter', 'Philip', 'Pearl', 'Patty', 'Patti', 'Penney', 'Percy', 'Phillip', 'Polly', 'Paddy', 'Phil', 'Primo', 'Patricia', 'Pamela', 'Phyllis', 'Paula', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Peggy', 'Pauline', 'Patsy', 'Penny', 'Priscilla', 'Pam', 'Paulette', 'Pandora', 'Pansy', 'Pattie', 'Paulina', 'Peggie', 'Penelope', 'Pennie', 'Phillis', 'Philomena', 'Phoebe', 'Porsche', 'Pacey', 'Pada', 'Pallavi', 'Paloma', 'Paola', 'Patia', 'Patrice', 'Perla', 'Perri', 'Petra', 'Phylicia', 'Phylis', 'Piia', 'Pilar', 'Pocahontas', 'Pollyanna', 'Pooja', 'Portia', 'Precious', 'Primrose', 'Princess', 'Priscila', 'Priya', 'Pablo', 'Papo', 'Pascal', 'Paulo', 'Pavee', 'Pedro', 'Peejay', 'Peng', 'Pepper', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rose', 'Rupert', 'Russell', 'Reed', 'Ross', 'Randolph', 'Raymond', 'Regan', 'Richard', 'Roy', 'Rosa', 'Roxanne', 'Ramsey', 'Randall', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Rhodes', 'Rivers', 'Rodgers', 'Rollins', 'Roman', 'Robert', 'Rock', 'Ruth', 'Ralph', 'Raines', 'Rankin', 'Ransom', 'Redding', 'Redmond', 'Rhea', 'Ring', 'Ritchie', 'Roe', 'Rachel', 'Rex', 'Robin', 'Roderick', 'Rodney', 'Ruby', 'Roger', 'Rae', 'Raleigh', 'Randell', 'Raphael', 'Raven', 'Rey', 'Richie', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rick', 'Rodger', 'Rolf', 'Rolland', 'Romeo', 'Raja', 'Ralap', 'Reg', 'Reginald', 'Reuben', 'Rod', 'Ron', 'Ronald', 'Rory', 'Rudolf', 'Rebecca', 'Rita', 'Rhonda', 'Regina', 'Roberta', 'Rosemary', 'Ramona', 'Rosie', 'Rosalie', 'Rosemarie', 'Rochelle', 'Raquel', 'Randy', 'Randal', 'Raye', 'Reba', 'Rebekah', 'Reggie', 'Rena', 'Renata', 'Rhoda', 'Ricarda', 'Robbie', 'Roma', 'Romaine', 'Rachal', 'Rachelle', 'Raegan', 'Rafaela', 'Raija', 'Raina', 'Raiza', 'Raman', 'Rani', 'Rania', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rashida', 'Raya', 'Rayanna', 'Raychelle', 'Raylene', 'Rayna', 'Rayne', 'Reanna', 'Rebeca', 'Rebekka', 'Reet', 'Reina', 'Renie', 'Reno', 'Reta', 'Reyna', 'Rhianna', 'Rhiannon', 'Rikki', 'Ris', 'Rizpah', 'Rizza', 'Robynne', 'Romina', 'Ronda', 'Rosalyn', 'Rosanna', 'Rosanne', 'Rosetta', 'Rosina', 'Rosita', 'Rowena', 'Roxana', 'Roxane', 'Roxanna', 'Roz', 'Rute', 'Ruxandra', 'Ryann', 'Ryanna', 'Ryleigh', 'Radou', 'Radu', 'Raffaele', 'Rahul', 'Raje', 'Ramdas', 'Ramesh', 'Ramiles', 'Ramiro', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ranbir', 'Ranen', 'Rashad', 'Rashawn', 'Rati', 'Raul', 'Rayden', 'Raymundo', 'Reece', 'Reicko', 'Remco', 'Remington', 'Remko', 'Renante', 'Renford', 'Renzo', 'Reynaldo', 'Reza', 'Rhett', 'Ricardo', 'Rickard', 'Rickey', 'Ricki', 'Ricky', 'Rico', 'Riecko', 'Rigoberto', 'Rinat', 'Rino', 'Ritchard', 'Rizqinofa', 'Roadley', 'Roberto', 'Rocco', 'Rocky', 'Rodny', 'Rodolfo', 'Rodrigo', 'Roel', 'Rogelio', 'Rohan', 'Rolin', 'Romell', 'Ronaldo', 'Roosevelt', 'Roscoe', 'Rosemario', 'Rouxinol', 'Royden', 'Ruben', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Rudy', 'Rui', 'Ruslan', 'Ruslim', 'Ruud', 'Ryanphilip', 'Ryker', 'Rylan', 'Ryley', 'Rynell', 'Rosamund', 'Raciel', 'Rafer', 'Rajan', 'Ravi', 'Rayniel', 'Remon', 'Rhean', 'Rian', 'Rienaldo', 'Riggin', 'Robbe', 'Robby', 'Robertino', 'Roelof', 'Rogan', 'Rohit', 'Ronel', 'Rooney', 'Raeann', 'Ragna', 'Razjahlynn', 'Reaina', 'Reandra', 'Reda', 'Reena', 'Refilwe', 'Reggy', 'Renita', 'Reva', 'Rhianne', 'Rhona', 'Rianne', 'Rihana', 'Rika', 'Rilana', 'Rio', 'Rivae', 'Ropelyn', 'Roseann', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Roseanna', 'Roseanne', 'Roshni', 'Rosibel', 'Rosslyn', 'Roxie', 'Rozas', 'Rudelle', 'Rudie', 'Rodman', 'Royce', 'Raby', 'Riona', 'Rayner', 'Rachel', 'Ramon', 'Roland', 'Rudolph', 'Rufus', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sophie', 'Scott', 'Spencer', 'Sophia', 'Stewart', 'Samantha', 'Sampson', 'Simon', 'Solomon', 'Stanley', 'Steve', 'Sanford', 'Sawyer', 'Sellers', 'Sexton', 'Shelton', 'Shepard', 'Shepherd', 'Sheppard', 'Sherman', 'Sofia', 'Samuel', 'Stanford', 'Steward', 'Shirley', 'Silvia', 'Sage', 'Sanderson', 'Scales', 'Sewell', 'Seymour', 'Sheehan', 'Sheffield', 'Sheldon', 'Sheridan', 'Sherwood', 'Shipley', 'Simms', 'Sinclair', 'Sam', 'Steven', 'Sharon', 'Sylvia', 'Stacy', 'Stella', 'Shelly', 'Stephen', 'Saul', 'Scarlett', 'Seth', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Shane', 'Silas', 'Sara', 'Snowy', 'Silverdew', 'Star', 'Sweety', 'Saxon', 'Sean', 'Sebastian', 'Sid', 'Silvester', 'Stan', 'Sandra', 'Sarah', 'Stephanie', 'Sherry', 'Sheila', 'Sally', 'Sue', 'Stacey', 'Sonia', 'Sherri', 'Sheryl', 'Sabrina', 'Sonya', 'Susie', 'Shelia', 'Sheri', 'Sadie', 'Sonja', 'Shari', 'Shawna', 'Sabina', 'Sabine', 'Sallie', 'Salome', 'Sammie', 'Sammy', 'Scarlet', 'Selena', 'Selene', 'Selina', 'Selma', 'Shera', 'Shona', 'Sibyl', 'Sigrid', 'Saba', 'Sable', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sachi', 'Sade', 'Sadia', 'Saffron', 'Saige', 'Salma', 'Samara', 'Samia', 'Samira', 'Sana', 'Sanchia', 'Sandrine', 'Sanne', 'Sapphire', 'Sarahi', 'Sarai', 'Saretta', 'Sarina', 'Sarita', 'Saskia', 'Savana', 'Savanah', 'Savanna', 'Savannah', 'Seanna', 'Sela', 'Serene', 'Serenity', 'Shaina', 'Shaira', 'Shakira', 'Shakyra', 'Shalana', 'Shalimar', 'Shalyse', 'Shameka', 'Shamika', 'Shana', 'Shanae', 'Shanda', 'Shandi', 'Shandra', 'Shani', 'Shania', 'Shanice', 'Shaniya', 'Shantel', 'Shantell', 'Shara', 'Sharyn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Shawnee', 'Shayla', 'Shaylee', 'Shaylyn', 'Shayna', 'Shazia', 'Sheba', 'Sheena', 'Shelbie', 'Sheree', 'Sherilyn', 'Sherryl', 'Sheyla', 'Shirlene', 'Shivaun', 'Shonda', 'Shonna', 'Shruti', 'Shyann', 'Shyanne', 'Shyla', 'Siani', 'Sidra', 'Sienna', 'Signe', 'Silje', 'Simone', 'Sindy', 'Siobhan', 'Sissy', 'Sivan', 'Skyla', 'Sloan', 'Soraya', 'Spela', 'Staci', 'Stacie', 'Starla', 'Starr', 'Stasha', 'Stefani', 'Stefania', 'Stefanie', 'Stephany', 'Stephenie', 'Stephnie', 'Suellen', 'Sukie', 'Susan', 'Susana', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Susannah', 'Susanne', 'Susy', 'Suzanne', 'Suzette', 'Suzie', 'Suzy', 'Svannah', 'Sveta', 'Svetlana', 'Sybil', 'Sydni', 'Sydnie', 'Sylvana', 'Sylvie', 'Sabastian', 'Safin', 'Salvador', 'Salvatore', 'Samson', 'San vey', 'Sang', 'Santiago', 'Saran', 'Sarath', 'Savege', 'Savion', 'Savorn', 'Savraj', 'Saymour', 'Sayre', 'Seamus', 'Sedge', 'Selim', 'Sem', 'Semaj', 'Senne', 'Seppe', 'Sergey', 'Sergio', 'Severiano', 'Shafiat', 'Shahbaz', 'Shahiem', 'Shailen', 'Shamar', 'Shamari', 'Shanook', 'Shasta', 'Shazeer', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sheaden', 'Shelwin', 'Shemar', 'Sherlock', 'Shivang', 'Shomari', 'Shwan', 'Simao', 'Simraj', 'Sinath', 'Sincere', 'Sion', 'Sitani', 'Siti', 'Sixto', 'Sjoerd', 'Slade', 'Slater', 'Slawomir', 'Sleepy', 'Smiley', 'Smitty', 'Snax', 'Sneed', 'Snuffel', 'Soeiro', 'Sonzer', 'Sonny', 'Sophea', 'Spak', 'Speedy', 'Spike', 'Spiro', 'Sporting', 'St. john', 'Stanislas', 'Staton', 'Steen', 'Steffan', 'Stephon', 'Sterling', 'Stijn', 'Stone', 'Strider', 'Strunk', 'Stuart', 'Sufyan', 'Suhana', 'Sukhveer', 'Suren', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Sutton', 'Suzuki', 'Sven', 'Swabie', 'Swede', 'Syed', 'Spark', 'Siuwah', 'Samli', 'Skywu', 'Sandee', 'Shino', 'Sofie', 'Saad', 'Saber', 'Sakkie', 'Sandro', 'Sanjeev', 'Saraph', 'Savoy', 'Scottie', 'Seaton', 'Sedrick', 'Selwyn', 'Shahid', 'Simuel', 'Sizemore', 'Sjaco', 'Sjef', 'Skip', 'Skot', 'Slavik', 'Sonte', 'Sorin', 'Stafford', 'Sunil', 'Surat', 'Sylvano', 'Stig', 'Sabire', 'Saimah', 'Samanta', 'Santena', 'Sanyonette', 'Schantol', 'Semmy', 'Senia', 'Shaedra', 'Shakema', 'Shaketta', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Shalaya', 'Shalita', 'Shamron', 'Shanell', 'Shanika', 'Shannia', 'Sharai', 'Shardeigh', 'Sharli', 'Sharmane', 'Sharna', 'Sharni', 'Shayodi', 'Sherya', 'Shianne', 'Shifrah', 'Shmily', 'Shontrease', 'Sicari', 'Sidnie', 'Silda', 'Simran', 'Sinead', 'Siniyah', 'Sjaya', 'Slava', 'Solveig', 'Sorana', 'Sterre', 'Stevisha', 'Sumera', 'Suyen', 'Swapna', 'Synaisha', 'Sondra', 'Shandy', 'Sakura', 'Sharron', 'Simba', 'Sahar', 'Sumi', 'Solomom', 'Shawn', 'Shaun', 'Sylvester', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tami', 'Todd', 'Tyler', 'Tanner', 'Tate', 'Terrell', 'Townsend', 'Travis', 'Tobias', 'Talbot', 'Tatum', 'Teague', 'Temple', 'Thorne', 'Thorpe', 'Thurman', 'Thurston', 'Titus', 'Tobin', 'Trent', 'Tripp', 'Tyson', 'Theodore', 'Tiffany', 'Timothy', 'Tom', 'Troy', 'Truman', 'Tandy', 'Tomas', 'Tankard', 'Tab', 'Ted', 'Ternence', 'Theobald', 'Thomas', 'Tim', 'Toby', 'Tony', 'Tyrone', 'Teresa', 'Theresa', 'Tammy', 'Tina', 'Thelma', 'Tara', 'Terri', 'Tonya', 'Tamara', 'Tanya', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tracey', 'Toni', 'Traci', 'Teri', 'Tricia', 'Tasha', 'Tabitha', 'Tammie', 'Tania', 'Teddy', 'Terrance', 'Terrence', 'Tess', 'Tessa', 'Tessie', 'Thad', 'Thaddeus', 'Thalia', 'Thea', 'Theodora', 'Theresia', 'Thomasina', 'Tilda', 'Tillie', 'Torrie', 'Trevor', 'Tristan', 'Trudy', 'Tabatha', 'Tabea', 'Tahnee', 'Taina', 'Taisha', 'Taleen', 'Talia', 'Talina', 'Talisha', 'Talitha', 'Taliyah', 'Tallulah', 'Tamah', 'Tamatha', 'Tameka', 'Tamia', 'Tamika', 'Tamsen', 'Tamsin', 'Tamzin', 'Tana', 'Tangi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tanisha', 'Taniya', 'Tanja', 'Taryn', 'Tatiana', 'Tatianna', 'Tatjana', 'Tatyana', 'Tawanna', 'Tawny', 'Taya', 'Tayla', 'Taysia', 'Tegan', 'Telma', 'Tennille', 'Tera', 'Teyana', 'Therese', 'Tia', 'Tiana', 'Tianna', 'Tiara', 'Tierney', 'Tierra', 'Tiffani', 'Tirzah', 'Tomara', 'Tonia', 'Tori', 'Toya', 'Tracie', 'Trang', 'Trina', 'Trish', 'Trixie', 'Tryna', 'Twila', 'Tyla', 'Tyra', 'Taber', 'Tad', 'Taj', 'Tajon', 'Tamaitikoha', 'Tamaris', 'Tambor', 'Tampe', 'Tapasvi', 'Tarek', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tareo', 'Tarian', 'Tariku', 'Tariq', 'Tavis', 'Taylen', 'Tazel', 'Tehmasp', 'Teifion', 'Teno', 'Terrill', 'Teymur', 'Thales', 'Thao', 'Thayne', 'Thesshell', 'Thien', 'Thierry', 'Thinh', 'Tiago', 'Timmi', 'Timmy', 'Timofey', 'Tino', 'Tinon', 'Tion', 'Tishon', 'Tito', 'Tobyn', 'Toddy', 'Tonaka', 'Tonino', 'Tonio', 'Topacio', 'Torrey', 'Tosh', 'Traman', 'Travers', 'Travon', 'Trayden', 'Trayvon', 'Trenton', 'Trever', 'Trevion', 'Trevis', 'Trevoc', 'Trevon', 'Trey', 'Treyvon', 'Trianno', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Triano', 'Trijny', 'Tristian', 'Tristin', 'Triston', 'Tronne', 'Tullio', 'Tupac', 'Tureyuki', 'Tusitala', 'Twan', 'Twoee', 'Tylor', 'Tyquan', 'Tyrese', 'Tyshawn', 'Tyshon', 'Tavia', 'Taiva', 'Tamir', 'Tanyel', 'Tasos', 'Taven', 'Tazhon', 'Teikari', 'Teylor', 'Themis', 'Thobian', 'Thylin', 'Timmu', 'Tineke', 'Tj', 'Toyeeb', 'Trystan', 'Tuca', 'Tuwan', 'Twiggy', 'Tygo', 'Tyzhe', 'Timerante', 'Tylique', 'Tshima', 'Tabby', 'Taige', 'Taila', 'Terence', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Vance', 'Vera', 'Vernon', 'Vinson', 'Victor', 'Virgil', 'Victoria', 'Viola', 'Vicente', 'Van', 'Verne', 'Vic', 'Vito', 'Vivian', 'Virginia', 'Valerie', 'Veronica', 'Vanessa', 'Vicki', 'Vickie', 'Velma', 'Violet', 'Verna', 'Vicky', 'Valeria', 'Valery', 'Venus', 'Verena', 'Vesta', 'Vida', 'Valencia', 'Valentina', 'Valorie', 'Vanda', 'Vanesa', 'Vania', 'Varsha', 'Veena', 'Veer', 'Vena', 'Verity', 'Veronique', 'Vesna', 'Vien', 'Vijaya', 'Vikki', 'Vilma', 'Viorica', 'Viviana', 'Vadim', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Walker', 'Wilson', 'Ward', 'Webb', 'Warren', 'Washington', 'Watkins', 'West', 'Wheeler', 'Williamson', 'Willis', 'Wallace', 'Wade', 'Walter', 'Warner', 'Webster', 'William', 'Waller', 'Walton', 'Ware', 'Watts', 'Weber', 'Whitehead', 'Wilder', 'Wilkinson', 'Witt', 'Wolfe', 'Wilbur', 'Winston', 'Winifred', 'Waite', 'Walden', 'Waldron', 'Washburn', 'Watt', 'Webber', 'Weldon', 'Wesley', 'Westbrook', 'Weston', 'Whitfield', 'Whitlock', 'Whitmore', 'Whittaker', 'Willard', 'Willoughby', 'Winslow', 'Wayne', 'Wendell', 'Woodrow', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy']
    // 讯飞输入
function xfshuru(aa) {
    function contains(a, x) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === x) {
                return true
            }
        }
    }
    try {
        var xsxx = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
        var dxxx = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
        var xx = {
            "q": [60, 1330],
            "w": [160, 1330],
            "e": [270, 1330],
            "r": [380, 1330],
            "t": [490, 1330],
            "y": [600, 1330],
            "u": [700, 1330],
            "i": [810, 1330],
            "o": [910, 1330],
            "p": [1020, 1330],
            "a": [115, 1500],
            "s": [230, 1500],
            "d": [330, 1500],
            "f": [440, 1500],
            "g": [540, 1500],
            "h": [650, 1500],
            "j": [750, 1500],
            "k": [860, 1500],
            "l": [970, 1500],
            "z": [220, 1670],
            "x": [330, 1670],
            "c": [440, 1670],
            "v": [540, 1670],
            "b": [650, 1670],
            "n": [750, 1670],
            "m": [860, 1670],
        }
        var dx = {
            "Q": [60, 1330],
            "W": [160, 1330],
            "E": [270, 1330],
            "R": [380, 1330],
            "T": [490, 1330],
            "Y": [600, 1330],
            "U": [700, 1330],
            "I": [810, 1330],
            "O": [910, 1330],
            "P": [1020, 1330],
            "A": [115, 1500],
            "S": [230, 1500],
            "D": [330, 1500],
            "F": [440, 1500],
            "G": [540, 1500],
            "H": [650, 1500],
            "J": [750, 1500],
            "K": [860, 1500],
            "L": [970, 1500],
            "Z": [220, 1670],
            "X": [330, 1670],
            "C": [440, 1670],
            "V": [540, 1670],
            "B": [650, 1670],
            "N": [750, 1670],
            "M": [860, 1670],
        }
        var yzm = aa
        click(700, 400)
        sleep(500)
        if (zhaose("if isColor(316,1312,0x242424,70) and isColor(558,1356,0x242424,70) and isColor(763,1322,0x242424,70) and isColor(949,1665,0x242424,70) and isColor(959,1806,0x242424,70) and isColor(951,1816,0x242424,70) and isColor(957,1824,0x242424,70)) then")) {
            TKB.xgsrizhi("数字键盘")
            click(980, 1830)
            sleep(500)
        }
        if (zhaose("if isColor(279,1332,0x242424,70) and isColor(343,1332,0x242424,70) and isColor(313,1356,0x242424,70) and isColor(959,1492,0x242424,70) and isColor(1006,1502,0x242424,70) and isColor(947,1653,0x242424,70) and isColor(996,1649,0x242424,70)) then")) {
            TKB.xgsrizhi("中文九件键盘")
            click(790, 1830)
            sleep(500)
        }
        if (zhaose("if isColor(64,1639,0x242424,70) and isColor(87,1664,0x242424,70) and isColor(956,1486,0x242424,70) and isColor(977,1519,0x242424,70) and isColor(842,1647,0x242424,70) and isColor(877,1648,0x242424,70)) then") || zhaose("if isColor(65,1640,0xdee4eb,70) and isColor(89,1666,0xdee4eb,70) and isColor(965,1488,0x242424,70) and isColor(859,1666,0x242424,70) and isColor(1008,1360,0x242424,70)) then")) {
            TKB.xgsrizhi("英文26键盘")
            press(1000, 1665, 3000)
                //删除
            for (var i = 0; i < yzm.length && i < 20; i++) {
                var wz = yzm.substr(i, 1)
                if (Number(i) == Number(yzm.length - 1)) {
                    wz = wz.toUpperCase()
                }
                if (contains(xsxx, wz) == true) {
                    if (zhaose("if isColor(64,1639,0x242424,70) and isColor(87,1664,0x242424,70) and isColor(956,1486,0x242424,70) and isColor(977,1519,0x242424,70) and isColor(842,1647,0x242424,70) and isColor(877,1648,0x242424,70)) then")) {
                        TKB.xgsrizhi("转小写")
                        click(90, 1630)
                        sleep(500)
                        i = i - 1
                        var wz = yzm.substr(i, 1)
                    } else {
                        TKB.xgsrizhi('小写')
                        click(xx[wz][0], xx[wz][1])
                        TKB.xgsrizhi(wz)
                        sleep(random(100, 300))
                    }
                } else if (contains(dxxx, wz) == true) {
                    if (zhaose("if isColor(65,1640,0xdee4eb,70) and isColor(89,1666,0xdee4eb,70) and isColor(965,1488,0x242424,70) and isColor(859,1666,0x242424,70) and isColor(1008,1360,0x242424,70)) then")) {
                        TKB.xgsrizhi("转大写")
                        click(90, 1630)
                        sleep(500)
                        i = i - 1
                        var wz = yzm.substr(i, 1)
                    } else {
                        TKB.xgsrizhi('大写')
                        click(dx[wz][0], dx[wz][1])
                        TKB.xgsrizhi(wz)
                        sleep(random(100, 300))
                    }
                } else {
                    TKB.xgsrizhi("不是英文不输入")
                }
            }
        } else {
            TKB.xgsrizhi('未知键盘')
            return false
        }
    } catch (error) {
        TKB.xgsrizhi("错误" + error)
        sleep(2000)
    }
}
//讯飞删除
function xfshanchu() {
    try {
        if (zhaose("if isColor(316,1312,0x242424,70) and isColor(558,1356,0x242424,70) and isColor(763,1322,0x242424,70) and isColor(949,1665,0x242424,70) and isColor(959,1806,0x242424,70) and isColor(951,1816,0x242424,70) and isColor(957,1824,0x242424,70)) then")) {
            TKB.xgsrizhi("数字键盘")
            //删除
            press(980, 1330, 5000)
            sleep(1000)
            press(90, 400, 3000)
            sleep(1000)
            click(110,280)
        }else if (zhaose("if isColor(378,1830,0x242424,70) and isColor(79,1668,0x242424,70) and isColor(93,1668,0x242424,70) and isColor(699,1828,0x242424,70) and isColor(60,1308,0x242424,70) and isColor(839,1649,0x242424,70) and isColor(877,1650,0x242424,70) then")){
            TKB.xgsrizhi("中文26件键盘")
            //删除
            press(1000, 1665, 5000)
            sleep(1000)
            press(90, 400, 3000)
            sleep(1000)
            click(110,280)
        }
        else if (zhaose("if isColor(279,1332,0x242424,70) and isColor(343,1332,0x242424,70) and isColor(313,1356,0x242424,70) and isColor(959,1492,0x242424,70) and isColor(1006,1502,0x242424,70) and isColor(947,1653,0x242424,70) and isColor(996,1649,0x242424,70)) then")) {
            TKB.xgsrizhi("中文九件键盘")
            //删除
            press(980, 1330, 5000)
            sleep(1000)
            press(90, 400, 3000)
            sleep(1000)
            click(110,280)
        }else if (zhaose("if isColor(959,1319,0x242424,70) and isColor(988,1332,0x242424,70) and isColor(296,1812,0x242424,70) and isColor(312,1840,0x242424,70) and isColor(530,1837,0x242424,70) and isColor(950,1831,0x242424,70) and isColor(999,1830,0x242424,70) then")){
            TKB.xgsrizhi("中英文九件键盘")
            //删除
            press(980, 1330, 5000)
            sleep(1000)
            press(90, 400, 3000)
            sleep(1000)
            click(110,280)
        }else if (zhaose("if isColor(64,1639,0x242424,70) and isColor(87,1664,0x242424,70) and isColor(956,1486,0x242424,70) and isColor(977,1519,0x242424,70) and isColor(842,1647,0x242424,70) and isColor(877,1648,0x242424,70)) then") || zhaose("if isColor(65,1640,0xdee4eb,70) and isColor(89,1666,0xdee4eb,70) and isColor(965,1488,0x242424,70) and isColor(859,1666,0x242424,70) and isColor(1008,1360,0x242424,70)) then")) {
            TKB.xgsrizhi("英文26键盘")
               //删除
            press(1000, 1665, 5000)
            sleep(1000)
            press(90, 400, 3000)
            sleep(1000)
            click(110,280)
        } else {
            TKB.xgsrizhi('未知键盘')
            return false
        }
    } catch (error) {
        TKB.xgsrizhi("错误" + error)
        sleep(2000)
    }
}
function zhaose(aa) {
    var ss = aa.split(" and ")
    var imgss = captureScreen()
        // var imgss = kk
    for (var k in ss) {
        //log(ss[k])
        var xx = TKB.getInsideString(ss[k], "(", ",")
        var yy = TKB.getInsideString(ss[k], ",", ",0")
        var ys = TKB.getInsideString(ss[k], "0x", ",70)")
            //log(xx + ":" + yy)
            //log(ys)
        if (images.detectsColor(imgss, "#" + ys, xx, yy)) {

        } else {
            imgss.recycle()
            return false
        }
    }
    imgss.recycle()
    return true
}

function zonghe() {
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("下一步").exists()) {
        TKB.xgsrizhi("下一步")
        click("下一步")
        sleep(2000)
    }
    if (text("继续").exists()) {
        TKB.xgsrizhi("继续")
        click("继续")
        sleep(1000)
    }
    if (text("始终同意").exists()) {
        TKB.xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (zhaose("if isColor(225,654,0xffffff,70) and isColor(424,926,0x000000,70) and isColor(562,1002,0x757575,70) and isColor(295,1275,0xff0000,70) and isColor(426,1300,0xff0000,70) and isColor(447,1287,0xffffff,70) and isColor(635,1299,0xffffff,70) and isColor(661,1301,0xff0000,70) then")) {
        TKB.xgsrizhi("关闭更新")
        click(900, 630)
        sleep(2000)
    }
    if (zhaose("if isColor(367,699,0x000000,70) and isColor(430,697,0x000000,70) and isColor(372,1077,0xff0000,70) and isColor(494,1096,0xff0000,70) and isColor(312,1262,0xff0000,70) and isColor(518,1262,0xffffff,70) and isColor(616,1284,0xffffff,70) then")) {
        TKB.xgsrizhi("青少年模式")
        click(510, 1270)
        sleep(2000)
    }
    if (zhaose("if isColor(425,924,0x000000,70) and isColor(492,916,0x000000,70) and isColor(443,999,0x757575,70) and isColor(551,1005,0x757575,70) and isColor(367,1265,0xff0000,70) and isColor(507,1307,0xffffff,70) and isColor(607,1313,0xffffff,70) then") || zhaose("if isColor(450,918,0x000000,70) and isColor(468,918,0x000000,70) and isColor(554,935,0x000000,70) and isColor(603,932,0x000000,70) and isColor(635,935,0x000000,70) and isColor(716,962,0xffffff,70) and isColor(308,1257,0xff0000,70) and isColor(556,1299,0xffffff,70) and isColor(618,1296,0xffffff,70) and isColor(700,1298,0xff0000,70) then")) {
        TKB.xgsrizhi("版本更新")
        click(900, 630)
        sleep(2000)
    }
    if (zhaose("if isColor(362,780,0x000000,70) and isColor(418,781,0x000000,70) and isColor(701,786,0x000000,70) and isColor(705,819,0x000000,70) and isColor(899,758,0x9e9e9e,70) and isColor(403,1037,0xebebeb,70) and isColor(489,1198,0xbdbdbd,70) and isColor(526,1215,0xbdbdbd,70) then")) {
        TKB.xgsrizhi("西瓜好评")
        click(900, 760)
        sleep(3000)
    }
}

function input_yzm(text, position) {
    try {
        click(position[0], position[1])
        sleep(5000)
        if (zhaose("if isColor(111,1218,0xffffff,70) and isColor(782,1159,0xffffff,70) and isColor(43,1442,0xffffff,70) and isColor(911,1469,0xdde4ec,70) and isColor(915,1658,0xdde4ec,70) and isColor(320,1809,0xffffff,70) and isColor(799,1809,0xffffff,70) and isColor(864,1839,0xffffff,70) then")) {
            TKB.xgsrizhi("数字键盘")
            var aa = { '0': [556, 1835], '1': [315, 1335], '2': [550, 1330], '3': [770, 1320], '4': [310, 1490], '5': [540, 1500], '6': [720, 1490], '7': [310, 1490], '8': [535, 1660], '9': [770, 1660] }
            for (let i = 0; i < text.length; i++) {
                click(aa[text[i]][0], aa[text[i]][1])
                sleep(1000)
            }
        } else {
            TKB.xgsrizhi("输入异常，请检查输入法")
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}
// 西瓜视频  (v4.5.6)
function xgzc() {
    TKB.xgsrizhi('西瓜视频注册')
    launch(dqbaoming)
    sleep(15000)
    var bb = 0
    var cs = 0
    var a = 0
    var tem = 0
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 40 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没注册成功')
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            zonghe()
            if (a == 0) {
                TKB.xgsrizhi("点击我")
                click(970, 1840)
                sleep(2000)
                a == 1
            }
            if (bb == 1 && tem == 0) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("获取不到号码")
                    return false
                }
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
            if (zhaose("if isColor(545,225,0x25f4ee,70) and isColor(564,281,0xfe2c55,70) and isColor(191,551,0xe8e8e9,70) and isColor(260,1152,0xc5c5c8,70) and isColor(535,1328,0x8a8b91,70) and isColor(540,1810,0xface15,70) and isColor(747,1808,0xface15,70) then")) {
                TKB.xgsrizhi("抖音手机号登录")
                if (bb == 0) {
                    TKB.xgsrizhi("先去获取号码")
                    bb = 1
                } else if (bb == 1) {
                    if (zh == false) {
                        TKB.xgsrizhi("没有获取到手机号")
                        return false
                    }
                    TKB.xgsrizhi("输入账号" + zh)
                    click(300, 550)
                    sleep(2000)
                    input_yzm(zh, [300, 550])
                    sleep(2000)
                    click(870, 700)
                    sleep(10000)
                }
                if (bb == 1) {
                    TKB.xgsrizhi("输入验证码")
                    yzm = TKB.huoquyzm("抖音")
                    if (cs > 2) {
                        TKB.xgsrizhi("不继续注册了")
                        return false
                    }
                    if (yzm == false) {
                        back()
                        sleep(100)
                        back()
                        sleep(2000)
                    } else {
                        TKB.xgsrizhi("输入验证码" + yzm)
                        click(400, 700)
                        sleep(500)
                        input_yzm(yzm, [400, 700])
                        sleep(3000)
                        click(540, 960)
                        sleep(5000)
                    }
                    cs = cs + 1
                }
            }
            if(zhaose("if isColor(192,829,0x212121,70) and isColor(185,848,0x212121,70) and isColor(210,828,0x212121,70) and isColor(307,830,0x212121,70) and isColor(431,830,0x212121,70) and isColor(474,1134,0x2a90d7,70) and isColor(742,1136,0x2a90d7,70) and isColor(840,1140,0x2a90d7,70) then")){
                TKB.xgsrizhi("绑定冲突")
                click(800, 1150)
                sleep(5000)
            }
            if(zhaose("if isColor(97,722,0xff0000,70) and isColor(185,744,0xff0000,70) and isColor(298,763,0xff0000,70) and isColor(407,773,0xff0000,70) and isColor(466,739,0xffffff,70) and isColor(534,752,0xffffff,70) and isColor(576,765,0xffffff,70) and isColor(614,772,0xffffff,70) and isColor(471,1091,0x222222,70) then")){
                TKB.xgsrizhi("立即登录")
                click(540, 760)
                sleep(5000)
            }
            if (zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then")) {
                TKB.xgsrizhi("主页")
                click(970, 1840)
                sleep(2000)
            }
            if (zhaose("if isColor(681,131,0x000000,70) and isColor(708,141,0x000000,70) and isColor(733,139,0x000000,70) and isColor(780,138,0x030303,70) and isColor(821,140,0x030303,70) and isColor(898,145,0x000000,70) and isColor(937,144,0x000000,70)and isColor(1039,147,0x030303,70)  then")) {
                TKB.xgsrizhi("个人页面")
                swipe(600, 400, 600, 1700, 1000)
                sleep(2000)
            }
            if (zhaose("if isColor(263,277,0x000000,70) and isColor(297,278,0x000000,70) and isColor(385,287,0x000000,70) and isColor(405,279,0x000000,70) and isColor(459,279,0x000000,70) and isColor(872,330,0x6e6e6e,70) and isColor(910,332,0x6e6e6e,70) then")) {
                TKB.xgsrizhi("点击登录")
                click(130, 350)
                sleep(3000)
            }
            if (zhaose("if isColor(84,172,0x171723,70) and isColor(926,156,0x161823,70) and isColor(989,192,0x161823,70) and isColor(357,1157,0xfe2c55,70) and isColor(553,1153,0xffffff,70) and isColor(503,1299,0x04498d,70) and isColor(614,1773,0x04498d,70) and isColor(676,1795,0x04498d,70) then")) {
                TKB.xgsrizhi("跳转登录")
                click(550, 1150)
                sleep(2000)
            }
            if (zhaose("if isColor(133,284,0x212121,70) and isColor(174,283,0x212121,70) and isColor(218,285,0x212121,70) and isColor(294,287,0x212121,70) and isColor(392,282,0x212121,70) and isColor(424,282,0x212121,70) and isColor(504,281,0x212121,70) and isColor(1001,155,0x212121,70) then")) {
                TKB.xgsrizhi("登录界面")
                click(220, 1770)
                sleep(2000)
            }
            if (zhaose("if isColor(468,583,0x1b0c1b,70) and isColor(545,579,0x25f4ee,70) and isColor(553,601,0xefefef,70) and isColor(351,1009,0xff0000,70) and isColor(505,1021,0xffffff,70) and isColor(565,710,0xfe2c55,70) then")) {
                TKB.xgsrizhi("其他登录方式")
                click(530, 1020)
                sleep(2000)
            } else if (zhaose("if isColor(140,283,0x212121,70) and isColor(217,572,0x757575,70) and isColor(195,1035,0xff0000,70) and isColor(454,1039,0xffffff,70) and isColor(1003,154,0x212121,70) and isColor(515,1398,0x000000,70) then") || zhaose("if isColor(417,1383,0x000000,70) and isColor(443,1384,0x000000,70) and isColor(463,1379,0x000000,70) and isColor(500,1380,0x000000,70) and isColor(553,1379,0xffffff,70) and isColor(607,1379,0x000000,70) and isColor(657,1379,0x000000,70) and isColor(671,1409,0x000000,70) then")) {
                TKB.xgsrizhi("其他登录方式1")
                click(520, 1400)
                sleep(2000)
            }
            if (zhaose("if isColor(409,1305,0xc0c0c0,70) and isColor(417,1306,0x000000,70) and isColor(462,1302,0x000000,70) and isColor(500,1302,0x202020,70) and isColor(548,1324,0x000000,70) and isColor(607,1301,0x000000,70) and isColor(589,1339,0x000000,70) and isColor(658,1302,0x060606,70) and isColor(671,1332,0x000000,70) then")) {
                TKB.xgsrizhi("其他登录方式2")
                    //抖音登录主界面
                click(520, 1320)
                sleep(2000)
            }
            if (zhaose("if isColor(468,282,0xffffff,70) and isColor(495,309,0xfe1247,70) and isColor(585,509,0xe8e8e9,70) and isColor(724,1490,0xfe2c55,70) and isColor(714,1814,0xface15,70) then") || text('抖音短视频授权登录').exists() && text('授权并登录').exists() || zhaose("if isColor(466,270,0xffffff,70) and isColor(530,353,0xffffff,70) and isColor(178,1340,0x161823,70) and isColor(171,1492,0xfe2c55,70) and isColor(549,1500,0xffffff,70) and isColor(642,1510,0xffffff,70) and isColor(685,1510,0xfe2c55,70) and isColor(914,1528,0xfe2c55,70) then")) {
                TKB.xgsrizhi("抖音登录")
                click(540,1510)
                sleep(2000)
            }
            if (zhaose("if isColor(399,918,0xcfdde5,70) and isColor(455,946,0xcddbe4,70) and isColor(700,953,0xf5505b,70) and isColor(702,987,0x464665,70) and isColor(446,1215,0xefefef,70) and isColor(492,1227,0x000000,70) and isColor(521,1229,0x000000,70) and isColor(572,1228,0x000000,70) then")) {
                TKB.xgsrizhi("没网")
                click(530, 1230)
                sleep(2000)
            }
            if (zhaose("if isColor(70,152,0x000000,70) and isColor(1001,156,0x212121,70) and isColor(465,735,0xbdbdbd,70) and isColor(500,751,0xffffff,70) and isColor(564,705,0xbdbdbd,70) and isColor(558,944,0x9e9e9e,70) and isColor(371,1357,0xff0000,70) and isColor(514,1392,0xffffff,70) and isColor(218,316,0x212121,70) then") || zhaose("if isColor(104,241,0xffffff,70) and isColor(533,699,0xbdbdbd,70) and isColor(499,749,0xffffff,70) and isColor(543,795,0xffffff,70) and isColor(1001,154,0x212121,70) and isColor(328,1365,0xff0000,70) and isColor(508,1367,0xffffff,70) and isColor(703,1388,0xff0000,70) then")) {
                TKB.xgsrizhi("完善信息")
                click(540, 1400)
                sleep(2000)
            }
            if (zhaose("if isColor(190,893,0x212121,70) and isColor(259,894,0x212121,70) and isColor(712,900,0x212121,70) and isColor(720,900,0x212121,70) and isColor(800,897,0x212121,70) and isColor(436,1057,0xffffff,70) and isColor(655,1074,0x2a90d7,70) and isColor(787,1074,0x2a90d7,70) then")){
                TKB.xgsrizhi("使用这个名字")
                click(640, 1080)
                sleep(2000)
            }
            if (zhaose("if isColor(73,121,0x000000,70) and isColor(715,123,0x000000,70) and isColor(912,119,0x000000,70) and isColor(179,528,0x000000,70) and isColor(264,531,0x000000,70) and isColor(540,536,0xebebeb,70) and isColor(706,528,0x000000,70) and isColor(865,335,0x6e6e6e,70) and isColor(1032,339,0x9b9b9b,70) then")) {
                TKB.xgsrizhi("登录成功1")
                sleep(2000)
                return true
            }
            if (zhaose("if isColor(375,119,0x000000,70) and isColor(431,115,0x000000,70) and isColor(849,115,0x222222,70) and isColor(461,336,0xb1b1b1,70) and isColor(676,330,0x9e9e9e,70) and isColor(752,438,0x9e9e9e,70) then") || zhaose("if isColor(61,138,0x000000,70) and isColor(834,122,0x222222,70) and isColor(830,137,0x222222,70) and isColor(873,155,0x222222,70) and isColor(983,122,0x212121,70) and isColor(984,153,0x212121,70) and isColor(613,432,0x9e9e9e,70) and isColor(682,437,0x9e9e9e,70) and isColor(751,440,0x9e9e9e,70) then")) {
                TKB.xgsrizhi("登录成功")
                back()
                sleep(1000)
                return true
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

//西瓜视频养号
function xgyh() {
    TKB.xgsrizhi('西瓜养号')
    TKB.qinglihh()
    sleep(3000)
    launch(dqbaoming)
    TKB.xgsrizhi('打开西瓜')
    sleep(15000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var sp_time = random(150, 210)
    var is_live = false
    var tem = 0
    var num = 0
    var sj = random(1, 100)
    while (1) {
        try {
            zonghe()
            if ((new Date()).getTime() - RT > stt * 60 * 1000 && is_live == true) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh(dqbaoming)
                break
            }
            if ((new Date()).getTime() - TSD < sp_time * 1000 && is_live == true) {
                toastLog('观看视频中')
                sj = random(1, 500)
                sleep(10000)
            } else if ((new Date()).getTime() - TSD < sp_time * 1000 && is_live == true) {
                toastLog('下滑')
                swipe(1400, 900, 1400, 180, 1000)
                sleep(1000)
                device.setMusicVolume(0)
                sleep(3000)
                num++
                TSD = (new Date()).getTime()
            }
            if (tem == 0) {
                TKB.xgsrizhi("主页")
                click(100, 1840)
                sleep(5000)
                TSD = (new Date()).getTime()
                tem = 1
            }
            if (zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then")) {
                TKB.xgsrizhi("还在主页")
                is_live = false
                sleep(2000)
            }
            if (is_live == false && zhaose("if isColor(165,563,0xffffff,70) and isColor(371,566,0xffffff,70) and isColor(553,572,0xffffff,70) and isColor(727,565,0xffffff,70) and isColor(913,571,0xffffff,70) and isColor(938,610,0xffba26,70) then")) {
                TKB.xgsrizhi("重新播放")
                click(85, 880) //点击重播
                sleep(10000)
                click(800, 650)
                sleep(2000)
                click(1000, 880)
                sleep(2000)
                is_live = true
            }
            if (is_live == false && zhaose("if isColor(165,840,0xffffff,70) and isColor(366,842,0xffffff,70) and isColor(554,842,0xffffff,70) and isColor(730,839,0xffffff,70) and isColor(914,844,0xffffff,70) and isColor(938,881,0xffc02f,70) then")) {
                TKB.xgsrizhi("重新播放1")
                    //关注的情况下
                click(85, 1150) //点击重播
                sleep(10000)
                click(800, 900)
                sleep(2000)
                click(1000, 1150)
                sleep(2000)
                is_live = true
            }
            if (tem == 1 && is_live == false && zhaose("if isColor(28,588,0xffffff,70) and isColor(208,593,0xffffff,70) and isColor(370,591,0xffffff,70) and isColor(549,590,0xffffff,70) and isColor(745,590,0xffffff,70) and isColor(919,586,0xffffff,70) and isColor(1049,590,0xffffff,70) then")) {
                TKB.xgsrizhi("点击播放1")
                    //关注的情况下
                click(540, 900)
                sleep(10000)
                click(800, 900)
                sleep(2000)
                click(1000, 1150)
                sleep(2000)
                is_live = true
            }
            if (tem == 1 && is_live == false) {
                TKB.xgsrizhi("点击播放")
                click(540, 630)
                sleep(10000)
                click(800, 650)
                sleep(2000)
                click(1000, 880)
                sleep(2000)
                is_live = true
            }
            if (is_live == true && sj > 495) {
                TKB.xgsrizhi("随机下滑")
                swipe(1400, 900, 1400, 180, 1000)
                TSD = (new Date()).getTime()
                device.setMusicVolume(0)
                sleep(2000)
            }
            if (is_live == true && num > 10) {
                TKB.xgsrizhi("去刷新")
                back()
                sleep(3000)
                is_live == false
                tem = 0
                device.setMusicVolume(0)
                TSD = (new Date()).getTime()
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

//西瓜视频改资料
function xgggzl() {
    TKB.xgsrizhi('西瓜视频改资料')
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(15000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var a = 0
    var b = 0
    var name_result = false
    var img_result = false
    var status = 0
    var tem = 0
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        var nickname = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(nickname)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        var jianjie = zz['jianjie'].split('|||')[0]
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
        setClip(nickname)
    }
    while (1) {
        if ((new Date()).getTime() - RT > 40 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没修改成功')
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            zonghe()
            if (tem == 0){
                TKB.xgsrizhi("点击主页")
                click(970, 1840)
                sleep(2000)
                tem = 1
            }
            if (zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then")) {
                TKB.xgsrizhi("主页")
                click(970, 1840)
                sleep(2000)
            }
            if (zhaose("if isColor(681,131,0x000000,70) and isColor(708,141,0x000000,70) and isColor(733,139,0x000000,70) and isColor(780,138,0x030303,70) and isColor(821,140,0x030303,70) and isColor(898,145,0x000000,70) and isColor(937,144,0x000000,70)and isColor(1039,147,0x030303,70)  then")) {
                TKB.xgsrizhi("个人页面")
                swipe(600, 400, 600, 1700, 1000)
                sleep(2000)
            }
            if (zhaose("if isColor(73,121,0x000000,70) and isColor(715,123,0x000000,70) and isColor(912,119,0x000000,70) and isColor(179,528,0x000000,70) and isColor(264,531,0x000000,70) and isColor(540,536,0xebebeb,70) and isColor(706,528,0x000000,70) and isColor(865,335,0x6e6e6e,70) and isColor(1032,339,0x9b9b9b,70) then")) {
                TKB.xgsrizhi("点击头像进入个人主页")
                click(130, 350)
                sleep(2000)
            }
            if (zhaose("if isColor(61,138,0x000000,70) and isColor(834,122,0x222222,70) and isColor(830,137,0x222222,70) and isColor(873,155,0x222222,70) and isColor(983,122,0x212121,70) and isColor(984,153,0x212121,70) and isColor(613,432,0x9e9e9e,70) and isColor(682,437,0x9e9e9e,70) and isColor(751,440,0x9e9e9e,70)) then")) {
                TKB.xgsrizhi("编辑资料")
                click(680, 450)
                sleep(2000)
            }
            if (a == 0) {
                if (xs['是否修改头像'] == '是') {
                    if (zhaose("if isColor(70,293,0x000000,70) and isColor(101,469,0x000000,70) and isColor(103,631,0x000000,70) and isColor(73,815,0x000000,70) and isColor(450,125,0x000000,70) and isColor(513,136,0x000000,70) then") && b == 0) {
                        TKB.xgsrizhi("点击头像")
                        click(930, 470)
                        sleep(2000)
                    }
                    if (zhaose("if isColor(72,1657,0x757575,70) and isColor(83,1686,0xffffff,70) and isColor(75,1800,0x757575,70) and isColor(76,1815,0xffffff,70) and isColor(84,1823,0x757575,70) and isColor(280,1672,0x212121,70) and isColor(285,1817,0x212121,70) then")) {
                        TKB.xgsrizhi("从相册选择")
                        click(400, 1700)
                        sleep(2000)
                    }
                    if (text('最近').exists() && id('com.android.documentsui:id/thumbnail').exists()) {
                        TKB.xgsrizhi('选择第一张图片')
                        click(300, 500)
                        sleep(2000)
                    }
                    if (id('com.gionee.gallery:id/crop_done').exists()) {
                        TKB.xgsrizhi('保存')
                        click(75, 145)
                        sleep(3000)
                        toastLog('头像设置完成')
                        TKB.xgsrizhi("头像设置完成")
                        a = 1
                        img_result = true
                    }
                }else {
                    a = 1
                    TKB.xgsrizhi("头像不修改")
                    img_return = '西瓜头像不修改'
                }
            } else if (a == 1) {
                zonghe()
                if (xs['是否修改名字'] == '是') {
                    if (zhaose("if isColor(61,138,0x000000,70) and isColor(834,122,0x222222,70) and isColor(830,137,0x222222,70) and isColor(873,155,0x222222,70) and isColor(983,122,0x212121,70) and isColor(984,153,0x212121,70) and isColor(613,432,0x9e9e9e,70) and isColor(682,437,0x9e9e9e,70) and isColor(751,440,0x9e9e9e,70)) then")) {
                        TKB.xgsrizhi("编辑资料")
                        click(680, 450)
                        sleep(2000)
                    }
                    if (zhaose("if isColor(70,293,0x000000,70) and isColor(101,469,0x000000,70) and isColor(103,631,0x000000,70) and isColor(73,815,0x000000,70) and isColor(450,125,0x000000,70) and isColor(513,136,0x000000,70) then") && b == 0) {
                        TKB.xgsrizhi("点击昵称")
                        click(950, 650)
                        sleep(2000)
                    }
                    if (zhaose("if isColor(61,138,0x000000,70) and isColor(448,127,0x000000,70) and isColor(627,136,0x000000,70) and isColor(996,116,0x212121,70) and isColor(254,292,0x9e9e9e,70) and isColor(274,320,0x9e9e9e,70) and isColor(997,505,0x9e9e9e,70) and isColor(1003,515,0x9e9e9e,70) and isColor(1027,511,0x9e9e9e,70) then")) {
                        TKB.xgsrizhi("修改昵称")
                        sleep(1000)
                        xfshanchu()
                        sleep(1000)
                        click(970, 130)
                        sleep(1000)
                        b = 1
                    }
                    if (zhaose("if isColor(75,1866,0xffffff,70) and isColor(110,1865,0xffffff,70) and isColor(118,1866,0xffffff,70) and isColor(183,1866,0xffffff,70) and isColor(258,1832,0xffffff,70) and isColor(391,1832,0xededed,70) and isColor(459,1833,0xffffff,70) and isColor(468,1833,0xffffff,70) and isColor(475,1854,0xffffff,70) then") && b == 1) {
                        TKB.xgsrizhi("昵称修改成功")
                        toastLog('昵称修改成功')
                        sleep(500)
                        name_result = true
                        a = 2
                    }
                    if (zhaose("if isColor(70,293,0x000000,70) and isColor(101,469,0x000000,70) and isColor(103,631,0x000000,70) and isColor(73,815,0x000000,70) and isColor(104,978,0x000000,70) and isColor(450,125,0x000000,70) and isColor(513,136,0x000000,70) then") && zhaose("if isColor(41,1828,0x1b1b1b,70) and isColor(79,1833,0xffffff,70) and isColor(99,1833,0xffffff,70) and isColor(176,1832,0xffffff,70) and isColor(249,1834,0xffffff,70) and isColor(298,1833,0xffffff,70) and isColor(361,1838,0xffffff,70) and isColor(666,1886,0x1b1b1b,70) and isColor(999,1874,0x1b1b1b,70) then") && b == 1) {
                        TKB.xgsrizhi("昵称已经存在")
                        b = 0
                        var ncx = nc[random(0, nc.length - 1)]
                        setClip(nickname + ncx)
                        click(950, 650)
                        sleep(2000)
                    }
                    if (zhaose("if isColor(82,1832,0xffffff,70) and isColor(129,1860,0xffffff,70) and isColor(190,1865,0xffffff,70) and isColor(252,1859,0xffffff,70) and isColor(344,1866,0xffffff,70) and isColor(381,1860,0xeeeeee,70) and isColor(417,1853,0xffffff,70) and isColor(417,1864,0xffffff,70) then") && b == 1) {
                        TKB.xgsrizhi("修改昵称失败")
                        b = 0
                        click(950, 650)
                        sleep(2000)
                    }
                    if (zhaose("if isColor(75,1867,0xffffff,70) and isColor(117,1867,0xffffff,70) and isColor(159,1868,0xf7f7f7,70) and isColor(207,1864,0xffffff,70) and isColor(260,1831,0xffffff,70) and isColor(344,1832,0xffffff,70) and isColor(402,1854,0xffffff,70) and isColor(538,1858,0xffffff,70) and isColor(541,1862,0x1b1b1b,70) and isColor(546,1865,0xffffff,70) then") && b == 1) {
                        TKB.xgsrizhi("用户资料审核中不可修改")
                        toastLog('用户资料审核中不可修改')
                        alert('用户资料审核中不可修改')
                        return false
                    }
                }else {
                    a = 2
                    TKB.xgsrizhi("昵称不修改")
                    name_return = '西瓜昵称不修改'
                }
            } else if (a == 2) {
                if (xs['是否修改简介'] == '是') {
                    setClip(jianjie)
                    sleep(2000)
                    if (zhaose("if isColor(70,293,0x000000,70) and isColor(101,469,0x000000,70) and isColor(103,631,0x000000,70) and isColor(73,815,0x000000,70) and isColor(450,125,0x000000,70) and isColor(513,136,0x000000,70) then")) {
                        TKB.xgsrizhi("点击简介")
                        click(930, 820)
                        sleep(2000)
                        if(zhaose("if isColor(130,441,0x1e88e5,70) and isColor(313,441,0x1e88e5,70) and isColor(442,441,0x1e88e5,70) and isColor(667,442,0x1e88e5,70) and isColor(785,441,0x1e88e5,70) and isColor(936,442,0x1e88e5,70) then")){
                            TKB.xgsrizhi("一行")
                            click(1000, 400)
                            sleep(1000)
                        }else if (zhaose("if isColor(171,493,0x1e88e5,70) and isColor(360,494,0x1e88e5,70) and isColor(503,493,0x1e88e5,70) and isColor(737,494,0x1e88e5,70) and isColor(840,494,0x1e88e5,70) then")){
                            TKB.xgsrizhi("二行")
                            click(1000, 460)
                            sleep(1000)
                        }else if (zhaose("if isColor(132,547,0x1e88e5,70) and isColor(201,547,0x1e88e5,70) and isColor(320,546,0x1e88e5,70) and isColor(427,547,0x1e88e5,70) and isColor(505,546,0x1e88e5,70) and isColor(591,548,0x1e88e5,70) and isColor(657,546,0x1e88e5,70) then")){
                            TKB.xgsrizhi("三行")
                            click(1000, 520)
                            sleep(1000)
                        }else if (zhaose("if isColor(116,601,0x1e88e5,70) and isColor(217,599,0x1e88e5,70) and isColor(372,600,0x1e88e5,70) and isColor(439,599,0x1e88e5,70) and isColor(562,600,0x1e88e5,70) and isColor(654,602,0x1e88e5,70) and isColor(813,600,0x1e88e5,70) then")){
                            TKB.xgsrizhi("四行")
                            click(1000, 570)
                            sleep(1000)
                        }else if (zhaose("if isColor(110,654,0x1e88e5,70) and isColor(258,653,0x1e88e5,70) and isColor(373,653,0x1e88e5,70) and isColor(493,652,0x1e88e5,70) and isColor(595,653,0x1e88e5,70) and isColor(756,653,0x1e88e5,70) then")){
                            TKB.xgsrizhi("五行")
                            click(1000, 620)
                            sleep(1000)
                        }
                        xfshanchu()
                        sleep(1000)
                        click(970, 130)
                        sleep(1000)
                    }
                    if (zhaose("if isColor(37,1816,0x1b1b1b,70) and isColor(80,1843,0xffffff,70) and isColor(139,1840,0xffffff,70) and isColor(176,1843,0xffffff,70) and isColor(219,1847,0xffffff,70) and isColor(264,1858,0x191919,70) and isColor(392,1863,0x1b1b1b,70) then")){
                        a = 3
                        TKB.xgsrizhi("西瓜简介不符合")
                        jj_return = '西瓜简介不符合'
                    }else{
                        a = 3
                        TKB.xgsrizhi("西瓜简介符合")
                        jj_return = '西瓜简介符合'
                    }
                    
                } else {
                    a = 3
                    TKB.xgsrizhi("简介不修改")
                    jj_return = '西瓜简介不修改'
                }
                if (a == 3){
                    if (name_result == true && img_result == true) {
                        status = 1
                    } else {
                        status = 2
                    }
                    if (name_result == true) {
                        var name_return = '西瓜昵称符合'
                    } else {
                        var name_return = '西瓜昵称不符合'
                    }
                    if (img_result == true) {
                        var img_return = '西瓜头像符合'
                    } else {
                        var img_return = '西瓜头像不符合'
                    }
                    TKB.xgsrizhi(name_return + ',' + img_return)
                    info = name_return + ',' + img_return + ',0'
                    TKB.upinfo(sbip, user_id, yhbh, info, status)
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}


function input_text(text, position) {
    try {
        click(position[0], position[1])
        sleep(5000)
        click(100, 1850)
        sleep(3000)
        if (zhaose("if isColor(111,1218,0xffffff,70) and isColor(782,1159,0xffffff,70) and isColor(43,1442,0xffffff,70) and isColor(911,1469,0xdde4ec,70) and isColor(915,1658,0xdde4ec,70) and isColor(320,1809,0xffffff,70) and isColor(799,1809,0xffffff,70) and isColor(864,1839,0xffffff,70) then")) {
            TKB.xgsrizhi("数字键盘")
            var aa = { '0': [556, 1835], '1': [315, 1335], '2': [550, 1330], '3': [770, 1320], '4': [310, 1490], '5': [540, 1500], '6': [720, 1490], '7': [310, 1490], '8': [535, 1660], '9': [770, 1660] }
            for (let i = 0; i < text.length; i++) {
                click(aa[text[i]][0], aa[text[i]][1])
                sleep(1000)
            }
        } else {
            TKB.xgsrizhi("输入异常，请检查输入法")
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

// 直播间
function xgzhibo() {
    TKB.qinglihh()
    TKB.xgsrizhi("西瓜直播")
    var rq = (new Date()).getTime()
    var xs = TKB.zhid(sbip, run_id)
    var room_url = xs["account"]
    setClip(room_url)
    sleep(2000)
    var lpp = 0
    var is_live = false,
        live_num = 3
    launch(dqbaoming)
    var hb = 0
    var fd = 0
    var rdd = (new Date()).getTime()
    sleep(15000)
    while (1) {
        try {
            zonghe()
            if ((new Date()).getTime() - rq > 60 * 1000 && is_live == false) {
                if (live_num <= 0) {
                    TKB.xgsrizhi("请检查直播是否结束")
                    return false
                }
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh()
                setClip(room_url)
                sleep(3000)
                launch(dqbaoming)
                rq = (new Date()).getTime()
                is_live = false
                live_num--
            }
            if (is_live == true && ((new Date()).getTime() - rq > 60 * 1000)) {
                TKB.xgsrizhi("去上传人气")
                TKB.uprenqi(sbip, user_id, yhbh, run_id, "1")
                sleep(random(2000, 5000))
                xs = TKB.zhid(sbip, run_id)
                var zhuangt = xs["status"]
                if (Number(zhuangt) != 1) {
                    TKB.xgsrizhi("服务器已经关闭" + zhuangt)
                    TKB.qinglihh()
                    return true
                }
                rq = (new Date()).getTime()
            }
            if (is_live == false && !(zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then") || zhaose("if isColor(942,1877,0x757575,70) and isColor(954,1874,0x7a7a7a,70) and isColor(963,1875,0x757575,70) and isColor(980,1873,0x7d7d7d,70) and isColor(975,1902,0x757575,70) and isColor(992,1873,0x767676,70) and isColor(993,1890,0x757575,70) and isColor(993,1902,0x757575,70) then"))) {
                // 如果当前界面未在直播间，并且也不在主页
                sleep(random(7000, 12000))
                click(840, 1830)
                sleep(2000)
            }
            if (is_live == true && (zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then"))) {
                TKB.qinglihh()
                setClip(room_url)
                sleep(3000)
                launch(dqbaoming)
                rq = (new Date()).getTime()
                sleep(2000)
            }
            if (zhaose("if isColor(18,1454,0xf0f0f0,70) and isColor(582,1450,0xf0f0f0,70) and isColor(1058,1454,0xf0f0f0,70) and isColor(10,1875,0xffffff,70) and isColor(492,1829,0x000000,70) and isColor(507,1871,0x262626,70) and isColor(536,1869,0x000000,70) and isColor(546,1870,0x000000,70) and isColor(583,1870,0x000000,70) and isColor(1072,1841,0xffffff,70) then")) {
                TKB.xgsrizhi("进入房间成功")
                click(530, 1850)
                is_live = true
                rq = (new Date()).getTime()
                rdd = (new Date()).getTime()
                sleep(2000)
                if (lpp == 0) {
                    TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                    lpp = 1
                }
            }
            if (is_live == true && random(0, 10) == 1) {
                toastLog("我在房间内")
            }
            if (is_live == true && hb == 0 && zhaose("if isColor(63,261,0xff0655,70) and isColor(61,275,0xf5bba9,70) and isColor(87,268,0xfffbe0,70) and isColor(83,279,0xff2c79,70) and isColor(118,275,0xf5bba9,70) and isColor(118,290,0xff115b,70) then")) {
                TKB.xgsrizhi("红包")
                click(90, 280)
                hb = 1
            }
            if (is_live == true && hb == 1 && zhaose("if isColor(309,837,0xff0c5d,70) and isColor(319,988,0xf2b8a6,70) and isColor(478,967,0xfef6da,70) and isColor(540,1023,0xfe2c79,70) and isColor(623,1033,0xf3e2be,70) and isColor(729,1001,0xf1d3b2,70) and isColor(695,1125,0xff2e7d,70) then")) {
                TKB.xgsrizhi("点击打开红包")
                click(540, 1020)
                sleep(2000)
            }
            if (is_live == true && hb == 1 && zhaose("if isColor(545,666,0xd89d61,70) and isColor(498,852,0xc29f64,70) and isColor(374,965,0xf7f2f3,70) and isColor(328,1065,0xff2d75,70) and isColor(519,1171,0xfcf6e3,70) and isColor(569,1229,0xfcf6e3,70) and isColor(539,1470,0xffffff,70) then")) {
                TKB.xgsrizhi("手慢了,没抢到")
                click(540, 1470)
                sleep(1000)
                hb = 0
            }
            if ((new Date()).getTime() - rdd > 10 * 60 * 1000 && is_live == true) {
                fd = 0
                rdd = (new Date()).getTime()
                //每过10分钟点一下福袋
            }
            if (is_live == true && fd == 0 && zhaose("if isColor(62,248,0xfa2b71,70) and isColor(76,259,0xf3c734,70) and isColor(101,259,0xecaf21,70) and isColor(75,295,0xfacc16,70) and isColor(98,307,0xface15,70) and isColor(112,307,0xe71652,70) then")) {
                TKB.xgsrizhi("福袋(位置一)")
                click(80, 290)
                sleep(5000)
                fd = 1
            }
            if (is_live == true && fd == 0 && zhaose("if isColor(176,245,0xfc327b,70) and isColor(192,259,0xf6c939,70) and isColor(221,258,0xf3b73d,70) and isColor(195,295,0xfacc16,70) and isColor(205,301,0xface15,70) and isColor(226,307,0xec1857,70) then")) {
                TKB.xgsrizhi("福袋(位置二)")
                click(210, 290)
                sleep(5000)
                fd = 1
            }
            if (is_live == true && fd == 1 && zhaose("if isColor(21,1740,0x000000,70) and isColor(97,1771,0xff5757,70) and isColor(373,1813,0xffffff,70) and isColor(704,1816,0xffffff,70) and isColor(795,1822,0xff5757,70) then")) {
                TKB.xgsrizhi("一键参与获取福袋")
                sleep(2000)
                click(520, 1810)
                sleep(3000)
            }
            if (is_live == true && fd == 1 && zhaose("if isColor(28,1772,0x000000,70) and isColor(128,1796,0x7f2b2b,70) and isColor(495,1811,0x7f7f7f,70) and isColor(862,1812,0x7f2b2b,70) then")) {
                TKB.xgsrizhi("已参与")
                back()
                sleep(1000)
            }
            if (is_live == true && fd == 1 && zhaose("if isColor(360,683,0x161823,70) and isColor(193,701,0xffffff,70) and isColor(278,1278,0xf04142,70) and isColor(382,1271,0xffffff,70) and isColor(709,1273,0xffffff,70) and isColor(810,1276,0xf04142,70) and isColor(928,1282,0xffffff,70) then")) {
                TKB.xgsrizhi("没有获取带福袋")
                back()
                sleep(1000)
                fd = 0
            }
            if (is_live == true && zhaose("if isColor(14,1887,0xffffff,70) and isColor(15,1817,0xffffff,70) and isColor(14,1666,0xffffff,70) and isColor(19,1471,0xffffff,70) and isColor(18,1364,0xffffff,70) and isColor(1069,1899,0xffffff,70) and isColor(1068,1736,0xffffff,70) and isColor(1065,1573,0xffffff,70) then")) {
                TKB.xgsrizhi("产品界面,返回")
                back()
                sleep(1000)
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        var aa = 1
        if( files.exists("/sdcard/观沧海.mp3") == false){
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3",0.1,true);
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
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续西瓜任务")
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
                sleep(5000);
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//********************************************************新服务器******************************************************************
function xgzhixing() {
    try {
        toastLog("执行西瓜视频任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var baom = getPackageName("西瓜视频")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("西瓜视频", "4.5.6")
                if (bbd == false) {
                    TKB.xgsrizhi("西瓜视频安装失败")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var dl = xgzc()
            if (dl == true) {
                if (fun == "修改资料") {
                    xgggzl()
                } else if (fun == "直播间") {
                    xgzhibo()
                } else {
                    xgyh()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
                // java.lang.System.exit(0);
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
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
            //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}

xgzhixing()