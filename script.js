

//create element class
function element(symbol, name, atomicNumber, atomicWeight, melt, boil, description, series) {
    this.symbol = symbol;
    this.name = name;
    this.atomicNumber = atomicNumber;
    this.atomicWeight = atomicWeight;
    this.description = description;
    this.melt = melt;
    this.boil = boil;
    this.series = series;
}

//associate series with colors
    var seriesColors = {'nonMetals': '#DC962A', 'alkali': '#C34220', 'alkaliEarth' : '#F5D76D', 'transition' : '#3884C0', 'metalloids' : '#C84B89', 'postTransition' : '#A0C13F', 'halogens' : '#3A8C44', 'noble' : '#C1285A', 'lanthanides' : '#6EA845', 'actinides' : '#7BBEDD'};

//create non metal group
    var H = new element("H", "Hydrogen", 1, 1.00794, 13.99, 20.271, "The lightest and most abundant element.", "nonMetals");
    var C = new element("C", "Carbon", 6, 12.011, "unknown", "unknown","The 15th most abundant element in the Earth's crust.", "nonMetals");
    var N = new element("N", "Nitrogen", 7, 14.007, 63.15, 77.355, "A common element in the Universe, estimated to be seventh in total abundance.", "nonMetals");
    var O = new element("O", "Oxygen", 8, 15.999, 54.36, 90.188, "An important part of the atomsphere.", "nonMetals");
    var P = new element("P", "Phosphorus", 15, 30.97376, 44.2, 280.5, "An element essential for life.", "nonMetals");
    var S = new element("S", "Sulfur", 16, 32.066, 388.36, 717.8, "Something something.", "nonMetals");
    var Se = new element("Se", "Selenium", 34, 78.971, 494, 958, "Something something.", "nonMetals");
//create alkali group
    var Li = new element("Li", "Lithium", 3, 6.94, 453.65, 1615, "Something something.", "alkali");
    var sodium = new element("Na", "Sodium", 11, 22.9897, 370.944, 1156.090, "Something something.", "alkali");
    var potassium = new element("K", "Potassium", 19, 39.0983, 336.7, 1032, "Something something.", "alkali");
    var rubidium = new element("Rb", "Rubidium", 37, 85.4678, 312.45, 961, "Something something.", "alkali");
    var cesium = new element("Cs", "Cesium", 55, 132.90545, 301.7, 944, "Something something.", "alkali");
    var francium = new element("Fr", "Francium", 87, 223, 300, 950, "Something something.", "alkali");
//create alkali earth group
    var beryllium = new element("Be", "Beryllium", 4, 9.01218, 1560, 2741, "Something something.", "alkaliEarth");
    var magnesium = new element("Mg", "Magnesium", 12, 24.305, 923, 1363, "Something something.", "alkaliEarth");
    var calcium = new element("Ca", "Calcium", 20, 40.078, 1115, 1757, "Something something.", "alkaliEarth");
    var strontium = new element("Sr", "Strontium", 38, 87.62, 1050, 1650, "Something something.", "alkaliEarth");
    var barium = new element("Ba", "Barium", 56, 137.327, 1000, 2118, "Something something.", "alkaliEarth");
    var radium = new element("Ra", "Radium", 88, 226, 973, 2010, "Something something.", "alkaliEarth");
//create transition group
    var scandium = new element("Sc", "Scandium", 21, 44.95590, 1814, 3109, "something something");
    var titanium = new element("Ti", "Titanium", 22, 47.867, 1941, 3560, "something something");
    var vanadium = new element("Va", "Vanadium", 23, 50.9415, 2183, 3680, "something something");
    var chromium = new element("Cr", "Chromium", 24, 51.9961, 2180, 2944, "something something");
    var manganese = new element("Mn", "Mangaese", 25, 54.93844, 1519, 2334, "something something");
    var iron = new element("Fe", "Iron", 26, 55.845, 1811, 3134, "something something");
    var cobalt = new element("Co", "Cobalt", 27, 58.933194, 1768, 3200, "something something");
    var nickel = new element("Ni", "Nickel", 28, 58.6934, 1728, 3186, "something something");
    var copper = new element("Cu", "Copper", 29, 63.546, 1357.77, 2835, "something something");
    var zinc = new element("Zn", "Zinc", 30, 65.38, 692.68, 1180, "something something");
    var yttrium = new element("Y", "Yttrium", 39, 88.90584, 1799, 3609, "something something");
    var zirconium = new element("Zi", "Zirconium", 40, 91.224, 2128, 4682,"something something");
    var niobium = new element("Nb", "Niobium", 41, 92, 92.90637, 2750, 5017, "something something");
    var molybdenum = new element("Mo", "Molybdenum", 42, 95.95, 2896, 4912, "something something");
    var technetium = new element("Tc", "Technetium", 43, 98, 2430, 4538, "something something");
    var ruthenium = new element("Ru", "Ruthenium", 44, 101.07, 2607, 4423, "something something");
    var rhodium = new element("Rh", "Rhodium", 45, 102.90550, 2237, 3968, "something something");
    var palladium = new element("Pd", "Palladium", 46, 106.42, 1828.05, 3236, "something something");
    var silver = new element("Sg", "Silver", 47, 107.8682, 1234.93, 2435, "something something");
    var cadmium = new element("Cd","Cadmium", 48, 112.414, 594.22, 1040, "something something");
    var hafnium = new element('Hf', 'Hafnium', 72, 178.49, 2506, 4876, "something something");
    var tantalum = new element('Ta', 'Tantalum', 73, 180.94788, 3290, 5731, "something something");
    var tungsten = new element('W', 'Tungsten', 74, 183.84, 3695, 5828, "something something");
    var rhenium = new element('Re', 'Rhenium', 75, 186.207, 3459, 5869, "something something");
    var osmium = new element('Os', 'Osmium', 76, 190.23, 3306, 5285, "something something");
    var iridium = new element('Ir', 'Iridium', 77, 192.217, 2739, 4701, "something something");
    var platinum = new element('Pt', 'Platinum', 78, 195.084, 2041.4, 4098, "something something");
    var gold = new element('Au', 'Gold', 79, 196.966569, 1337.33, 3129, "something something");
    var mercury = new element('Hg', 'Mercury', 80, 200.592, 234.3210, 629.88, "something something");
    var rutherfordium = new element('Rf', 'Rutherfordium', 104, 267,2400, 5800, "something something");
    var dubnium = new element('Db', 'Dubnium', 105, 268, 'unknown', 'unknown', "something something");
    var seaborgium = new element('Sg', 'Seaborgium', 106, 269, 'unknown', 'unknown', "something something");
    var bohrium = new element('Bh', 'Bohrium', 107, 270, 'unknown', 'unknown', "something something");
    var hassium = new element('Hs', 'Hassium', 108, 269, 'unknown', 'unknown', "something something");
    var meitnerium = new element('Mt', 'Meitnerium', 109, 278, 'unknown', 'unknown', "something something");
    var darmstadium = new element('Ds', 'Darmstadium', 110, 281, 'unknown', 'unknown', "something something");
    var roentgenium = new element('Rg', 'Roentgenium', 111, 281, 'unknown', 'unknown', "something something");
    var copernicium = new element('Cn', 'Copernicium', 112, 285, 'unknown', 'unknown', "something something"); 
//create metlloids group
    var B = new element('B', 'Boron', 5, 10.81, 2349, 4200, "something something", "metalloids");
    var silicon = new element('Si', 'Silicon', 14, 28.085, 1687, 3538, "something something");
    var germanium = new element('Ge', 'Germanium', 32, 72.630, 1211.40, 3106, "something something");
    var arsenic = new element('As', 'Arsenic', 33, 74.921595, 'unknown', 'unknown', "something something");
    var antimony = new element('Sb', 'Antimony', 51, 121.760, 903.78, 630.63, "something something");
    var tellurium = new element('Te', 'Tellurium', 52, 127.60, 722.66, 1261, "something something");
//create post transition group
    var aluminium = new element('Al', 'Aluminium', 13, 26.9815385, 933.47, 2792, "something something");
    var gallium = new element('Ga', 'Gallium', 31, 69.723, 302.9146, 2477, "something something");
    var indium = new element('In', 'Indium', 49, 114.818, 429.7485, 2345, "something something");
    var tin = new element('Sn', 'Tin', 50, 118.710, 505.08, 2875, "something something");
    var thallium = new element('Tl', 81, 204.38, 577, 1746, "something something");
    var lead = new element('Pb', 'Lead', 82, 207.2, 600.61, 2022, "something something");
    var bismuth = new element('Bi', 'Bismuth', 83, 208.98040, 544.7, 1837, "something something");
    var polonium = new element('Po', 'Polonium', 84, 209, 527, 1235, "something something");
    var ununtrium = new element('Uut', 'Ununtrium', 113, 286, 700, 1430, "something something");
    var flerovium = new element('Fl', 'Flerovium', 114, 289, 340, 153, "something something");
    var ununpentium = new element('Uup', 'Ununpentium', 115, 288, 670, 1400, "something something");
    var livermorium = new element('Lv', 'Livermorium', 116, 293, 'unknown', 'unknown', "something something");
//create halogen group
    var fluorine = new element('F', 'Fluorine', 9, 18.998403, 53.48, 85.03, "something something");
    var cholrine = new element('Cl', 'Cholrine', 17, 35.45, 171.6, 239.11, "something something");
    var bromine = new element('Br', 'Bromine', 35, 79.904, 265.8, 332, "something something");
    var iodine = new element('I', 'Iodine', 53, 126.90447, 386.85, 457.4, "something something");
    var astatine = new element('At', 'Astatine', 85, 210, 575, 610, "something something");
    var ununseptium = new element('Uus', 'Ununseptium', 117, 294, 'unknown', 'unknown', "something something");
//create noble gas group
    var He = new element('He', 'Helium', 2, 4.002602, 0.95, 4.222, "something something", "noble");
    var neon = new element('Ne', 'Neon', 10, 20.1797, 24.56, 27.104, "something something");
    var argon = new element('Ar', 'Argon', 18, 39.948, 83.81, 87.302, "something something");
    var krypton = new element('Kr', 'Krypton', 36, 83.798, 115.78, 119.93, "something something");
    var xenon = new element('Xe', 'Xenon', 54, 131.293, 161.40, 165.051, "something something");
    var radon = new element('Rn', 'Radon', 86, 222, 202, 211.5, "something something");
    var ununoctium = new element('Uuo', 'Ununoctium', 118, 294, 'unknown', 'unknown', "something something");
//create lathanides group
    var lanthanum = new element('La', 'Lanthanum', 57, 138.90547, 1193, 3737, "something something");
    var cerium = new element('Ce', 'Cerium', 58, 140.116, 1068, 3716, "something something");
    var praseodymium = new element('Pr', 'Praseodymium', 59, 140.90766, 1208, 3793, "something something");
    var neodymium = new element('Nd', 'Neodymium', 60, 144.242, 1297, 3347, "something something");
    var promethium = new element('Pm', 'Promethium', 61, 145, 1315, 3273, "something something");
    var samarium = new element('Sm', 'Samarium', 62, 150.36, 1345, 2067, "something something");
    var europium = new element('Eu', 'Europium', 63, 151.964, 1099, 1802, "something something");
    var gadolinium = new element('Gd', 'Gadolinium', 64, 157.25, 1585, 3546, "something something");
    var terbium = new element('Tb', 'Terbium', 65, 158.9235, 1629, 3503, "something something");
    var dysprosium = new element('Dy', 'Dysprosium', 66, 162.5, 1680, 2840, "something something");
    var holmium = new element('Ho', 'Holmium', 67, 164.93033, 1734, 2993, "something something");
    var erbium = new element('Er', 'Erbium', 68, 167.259, 1802, 3141, "something something");
    var thulium = new element('Tm', 'Thulium', 69, 168.93422, 1818, 2223, "something something");
    var ytterbium = new element('Yb', 'Ytterbium', 70, 173.054, 1097, 1469, "something something");
    var lutetium = new element('Lu', 'Lutetium', 71, 174.9668, 1925, 3675, "something something");
//create actinoids group
    var actinium = new element('Ac', 'Actinium', 89, 227, 1323, 3471, "something something");
    var thorium = new element('Th', 'Thorim', 90, 232.0377, 2115, 5061, "something something");
    var protactinium = new element('Pa', 'Protactinium', 91, 231.03588, 1841, 4300, "something something");
    var uranium = new element('U', 'Uranium', 92, 23.02891, 1405, 4404, "something something");
    var neptunium = new element('Np', 'Neptunium', 93, 237, 910, 4273, "something something");
    var plutonium = new element('Pu', 'Plutonium', 94, 244, 912.5, 3505, "something something");
    var americium = new element('Am', 'Americium', 95, 243, 1449, 2880, "something something");
    var curium = new element('Cm', 'Curium', 96, 247, 1613, 3383, "something something");
    var berkelium = new element('Bk', 'Berkelium', 97, 247, 1259, 2900, "something something");
    var californium = new element('Cf', 'Californium', 98, 251, 1173, 1743, "something something");
    var einsteinium = new element('Es', 'Einsteinium', 99, 252, 1133, 1269, "something something");
    var fermium = new element('Fm', 'Fermium', 100, 257, 1125, 'unknown', "something something");
    var mendelevium = new element('Md', 'Mendelevium', 101, 258, 1100, 'n/a', "something something");
    var nobelium = new element('No', 'Nobelium', 102, 259, 1100, 'unknown', "something something");
    var lawrencium = new element('Lr', 'Lawrencium', 103, 262, 1900, 'unknown', "something something");

$(document).ready(function (){
	
    //highlight on mouseover
	$('.effects').hover(function () {
		$(this).effect('highlight', {color: '#F0F0F0'}, 300);
	});


    //select rows
    $('.rowSelector').click(function(e){
        e.preventDefault();
        $(this).parents('.row').effect('shake', {distance: 5, times: 3}, 1000);
    });

    //select rows split into upper and lower table elements
    $('.rowSelectorLower').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('row6')){
            $('#table_lower > #row_6').effect('shake', {distance: 5, times: 3}, 1000);
        } else {
            $('#table_lower > #row_7').effect('shake', {distance: 5, times: 3}, 1000);
        }
    });

    //select columns
    $('.colSelector').click(function(e){
        e.preventDefault();
        var colNum = $(this).html();
        var colClass = '.col' + colNum;
        $(colClass).effect('bounce', {distance: 10, times: 3}, 750);
    });

    //select by group color
    $('#group_key div').click(function(e){
        e.preventDefault();
        $series = $(this).attr("class");
        $series = $series.replace(' key', '');
        $elems = $('.' + $series);
        $elems.effect('highlight', {color: '#F0F0F0'}, 1500);
    });

    //create default dialog box
    $.extend($.ui.dialog.prototype.options, { modal: true, resizable: true, autoOpen: false, show: 'clip', height: 350, width: 350 });

    //create a function to fill in the element's info into a dialog box
    var dialogName = $(dialogName);
    var fillDialog = function(element)
        {
            $(document).ready(function (){
                $(dialogName).empty();
                $(dialogName).dialog("open");
                $(dialogName).append( '<h1>'+ element.symbol + '</h1>' + '<h2>' + element.name + '</h2>' + 'Atomic Number: ' + element.atomicNumber + '<br>' + 'Atomic Weight: ' + element.atomicWeight + '<p>' + 'Melting Point: ' + element.melt +' (K)' + '<br>' + 'Boiling Point: ' + element.boil + ' (K)' + '<p>' );
            });
        }

    $('.elementSq').click(function(){
        $elementSym = $(this).find('.elemSym').html();
        $elementSym = eval($elementSym);
        $elemSeries = $elementSym["series"];
        $bgColor = seriesColors[$elemSeries];
        dialogName = '.dialog';
        $(dialogName).css("background-color", $bgColor);
        fillDialog($elementSym);
        console.log($elementSym);
    });

	$(function() {
        //create dialog 1 (non metal group)
	    $('.dialog').dialog({
        });
	});

});

