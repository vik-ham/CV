$(document).ready(function() {

    $('.ua').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(ua[key]);
       });
    });
 
    $('.en').on('click', function() {
       var r = $('.localization').each(function() {
          var el = $(this);
          var key = (el.attr('caption'));
          el.text(en[key]);
       });
    });
    
    let ua = {
       name: 'Віктор Хамазюк',
       name_dev: 'JavaScript Frontent розробник',
       name_about: 'Про мене',
       name_about_p: 'Я Frontend розробник. Працюю frontend розробником менше року, та маю досвід роботи над проектом Shopify. Моя ціль продовжувати розвиватися та дізнаватися більше про фреймворки JavaScript.',
       name_experience: 'Досвід роботи', 
       name_experience_p: 'Травень 2021 – по теперішній час: «Mamma Mia Covers», Розробка та підтримка',
       name_education: 'Освіта',
       name_education_p: '2014-2019 «Хмельницький Національний Університет» - «Менеджмент» (Магістр)',
       name_Professional: 'Професійні навики'
    };

    let en = {
       name: 'Viktor Hamaziuk',
       name_dev: 'JavaScript Frontent Developer',
       name_about: 'About me',
       name_about_p: 'I\'m Frontend Developer. I\'m working on the frontend developer for less than a year. I have experience work on the Shopify project. I want to continue to develop and learn more about JavaScript frameworks.',
       name_experience: 'Experience',
       name_experience_p: 'May 2021 - present: "Mamma Mia Covers", Development and support',
       name_education: 'Education',
       name_education_p: '2014-2019 “Khmelnytsky National University” - “Management” (Master)',
       name_Professional: 'Professional Skill'
    };
 });
