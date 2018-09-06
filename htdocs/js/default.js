(function() {
  var eventList;

  eventList = [
    {
      title: ['„start with simplify“',
    'Entscheidungshilfen für Innovation, Leadership und Mental Agility'],
      text: ['Neue Geschäftsmodelle, Innovationen und Zukunftslösungen bewegen Menschen und verändern die Gesellschaft. Technologie, Digitalisierung und Automatisierung stehen im Fokus der Medien. Doch was geschieht mit Mensch und Mitarbeiter*innen? Welche Lösungen brauchen Führungskräfte und Entscheider? Wir möchten mit der humanfy Expertise „Innovation, Leadership und Mental Agility“ die Komplexität reduzieren und gemeinsam praktikable Entscheidungshilfen für die unternehmerische Anwendung herausarbeiten.'],
      starts: '2018-10-15 15:00',
      ends: '2018-10-15 17:30',
      link: '',
      location: 'humanfy @Design Offices Nürnberg',
      address: ['Königstorgraben 11',
    '90402 Nürnberg']
    },
    {
      title: ['Grüne Arbeitswelten',
    'was hat sich wirklich verändert?'],
      text: ['Effizienz- und Innovationsdruck führen zu einer intensiveren Zusammenarbeit. Entsprechende Auswirkungen sind sichtbar im Organisationsdesign, in den Managementmethoden und in der Mitarbeiter-Erfahrung – human eXperience (hX). An einem aktuellen Projekt für die PSD-Bank zeigen wir auf, wie transparentere Zusammenarbeit zu einem agilen Antrieb und unternehmensübergreifendem Agieren führt.'],
      starts: '2018-10-16 18:30',
      ends: '2018-10-16 23:00',
      link: '',
      location: 'PSD-Bank @Möbelkollektiv',
      address: ['Wiesentalstrasse 40',
    'Bauteil C',
    '3. OG',
    '90419 Nürnberg']
    },
    {
      title: ['ExitGames Nürnberg',
    '„Outsite“ New Work Thrill'],
      text: ['Was sind schon psychologische oder politische Thriller, das hier ist „real & new“. Die Teams erheben sich zu einer besonderen Gattung des neuen Arbeitens „Outsite - The gX To Pertrition“. Gamification eXperience – the real thing, what you really want to do. Wir präsentieren Ergebnisse im neuen Verständnis des ExitGames „Outsite“ - Ereignis, Erlebnis, Ergebnis, bleib gespannt!'],
      starts: '2018-10-17 14:00',
      ends: '2018-10-17 17:30',
      link: '',
      location: 'ExitGames @DesignOffices Nürnberg',
      address: ['Königstorgraben 11',
    '90402 Nürnberg']
    },
    {
      title: ['Agilität in der Softwareentwicklung'],
      text: ['Agilität ist in der Softwareentwicklung hat sich bereits etabliert, doch wie gelingt der Übertrag von Agilität auf das gesamte Unternehmen?',
    'Innovative und individualisierbare Lösungen erfordern neben Technologie und Methodik eine (eigene) Prinzipienumgebung für teamübergreifende Zusammenarbeit - auch außerhalb der Softwareentwicklung. Es braucht Mitarbeiter, die mit Einsatz, Begeisterung und Überzeugung gemeinsame Wege des Lernens und Entwickelns gehen wollen. Am Beispiel TeamBank AG zeigen Mitarbeiter, Teams und Projekte ihre Prinzipien und Werkzeuge wie innerhalb der TeamBank AG Entwicklung mitbestimmt wird.'],
      starts: '2018-10-18 18:30',
      ends: '2018-10-18 23:00',
      link: '',
      location: 'TeamBank @Möbelkollektiv',
      address: ['Wiesentalstraße 40',
    'Bauteil C',
    '3. OG',
    '90419 Nürnberg']
    },
    {
      title: ['New Work Roadmap',
    'Die individuelle Entwicklung von Arbeitswelten und -weisen'],
      text: ['Unternehmen haben aktuell die Herausforderung Lösungen zu finden, die sowohl Sicherheit als auch Flexibilität bieten. Generationenübergreifendes Arbeiten, agile Arbeitsweisen und das digitale Selbstverständnis stehen besonders im Mittelpunkt bei Personalverantwortlichen und allen anderen Entscheidern. Sparda Consult und Fachkräfterekrutieren(.)de zeigen praxisorientierte Beispiele einer funktionierenden New Work Roadmap.'],
      starts: '2018-10-19 18:30',
      ends: '2018-10-19 23:00',
      link: '',
      location: 'Sparda-Consult',
      address: ['Laufamholzstraße 116',
    '90482 Nürnberg']
    }
  ];

  if ($('#events').length) {
    new Vue({
      el: '#events',
      data: {
        events: eventList
      },
      filters: {
        dddd: function(date) {
          return moment(date).format('dddd');
        },
        ll: function(date) {
          return moment(date).format('ll');
        },
        LT: function(date) {
          return moment(date).format('LT');
        }
      }
    });
  }

  $('[data-href]').click(function() {
    var href, name;
    href = $(this).data('href');
    name = $(this).text();
    return window.open(href, name);
  });

  $('[data-background]').each(function() {
    var image;
    image = $(this).data('background');
    return $(this).removeAttr('data-background').css('backgroundImage', `url(${image})`);
  });

}).call(this);
