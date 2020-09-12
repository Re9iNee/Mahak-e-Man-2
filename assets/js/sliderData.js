let app = angular.module('myApp', []);

function slider(header, subHeader, img, button) {
    this.header = header;
    this.subHeader = subHeader;
    this.img = img;
    this.button = button;
    return this;
}
let slides = null;
app.controller('myCtrl', $scope => {
    $scope.slides = [new slider('بازی کنید، هدیه بگیرید', 'توجه داشته باشید که در هر روز فقط یکبار می توانید امتیاز بازی را کسب  نمایید', {
        url: 'dices-circle.png',
        alt: 'بازی',
    }, {
        text: 'بازی کنید',
        url: 'https://www.mahaksoft.com/learngame/'
    }),new slider('معرفی مشتری', 'پس از انعقاد قرارداد با مشتریانی که شما معرفی کرده اید متناسب با آن امتیازی به شما تعلق می گیرد', {
        url: 'customer.png',
        alt: 'معرفی مشتری',
    }, {
        url: 'https://intro.mahaksoft.com/',
        text: 'کلیک کنید'
    }), new slider('تمدید پشتیبانی', 'با تمدید یکساله اعتبار پشتیبانی خود امتیاز کسب کنید', {
        url: 'recharge.png',
        alt: 'تمدید پشتیبانی',
    }, {
        url: 'https://login.mahaksoft.com/supportCredit.aspx',
        text: 'کلیک کنید'
    }), new slider('ثبت مورد', 'با ثبت هر مورد در سامانه اعلام خطا و امکان 10 امتیاز دریافت کنید', {
        url: 'error.png',
        alt: 'ثبت خطا',
    }, {
        url: 'https://login.mahaksoft.com/customerservices/ErrorFeatures.aspx',
        text: 'کلیک کنید'
    }), new slider('فعال سازی محصول', 'با فعال سازی بسته نرم افزاری خود می توانید 20 امتیاز کسب کنید', {
        url: 'active.png',
        alt: 'فعال سازی',
    }, {
        url: 'https://www.mahaksoft.com/learn-active-software/',
        text: 'کلیک کنید'
    }), new slider('تایید ایمیل', 'این فعالیت به زودی برای شما  فراهم خواهد شد تا از این طریق نیز بتوانید کسب امتیاز نمایید', {
        url: 'email.png',
        alt: 'ایمیل',
    }, {
        url: 'https://www.mahaksoft.com/comingsoon-hamrahan/',
        text: 'به زودی'
    }), new slider('خرید مجدد و ارتقا', 'در صورت خرید افزونه جدید و یا ارتقای نرم افزار خود، به میزان خریدتان امتیاز کسب کنید', {
        url: 'sell.png',
        alt: 'خرید مجدد',
    }, {
        url: 'http://login.mahaksoft.com/customerservices/upgradepackage.aspx',
        text: 'کلیک کنید'
    }), new slider('انتشار مقاله', 'شما برای انتشار هر مقاله ارسالی 50 امتیاز کسب می کنید', {
        url: 'article.png',
        alt: 'انتشار مقاله',
    }, {
        url: 'https://www.mahaksoft.com/%d8%a7%d8%b7%d9%84%d8%a7%d8%b9-%d8%b1%d8%b3%d8%a7%d9%86%db%8c/%d8%a7%d8%b1%d8%b3%d8%a7%d9%84-%d9%85%d9%82%d8%a7%d9%84%d8%a7%d8%aa/',
        text: 'کلیک کنید'
    })];
    slides = $scope.slides;  
})