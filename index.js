const { upload } = require('youtube-videos-uploader'); // Kütüphanemizi Tanımladık.

// Yüklenicek Hesabın Bilgileri //
let eposta = "YÜKLENİCEK_HESABIN_EPOSTA_ADRESİNİ_YAZINIZ."
let sifre = "YÜKLENİCEK_HESABIN_ŞİFRESİNİ_YAZINIZ."
let recovery = "YÜKLENİCEK_HESABIN_KURTARMA_EPOSTASINI_YAZINIZ." // https://myaccount.google.com/security Adlı Linke Gidip Kurtarma Epostasını Yazınız. ( Telefon Doğrulamasını Kapatınız. )
// - Yüklenicek Hesabın Bilgileri - //


// Kayıt Edilecek Videonun Bilgileri //
let videoismi = "YÜKLENİCEK_VİDEONUN_İSMİNİ_YAZINIZ." // Eğer Varsayılan Yükleme Ayarlarınız Varsa Lütfen https://studio.youtube.com/ Adlı Linkten Siliniz.
let videoaciklamasi = "YÜKLENİCEK_VİDEONUN_AÇIKLAMASINI_YAZINIZ."
let videofotografi = "YÜKLENİCEK_VİDEONUN_FOTOĞRAFININ_DOSYA_KONUMU"
let videolokasyonu = "YÜKLENİCEK_VİDEONUN_DOSYA_KONUMU"
let videoetiketleri = ["YÜKLENİCEK_VİDEONUN_BİRİNCİ_ETİKETİ","YÜKLENİCEK_VİDEONUN_İKİNCİ_ETİKETİ"] // Buraya Değer Ataya Ataya Daha Fazla Etiket Ekliyebilirsiniz.
let videococuk = false // Eğer Çocuklara Özel Olucak İse Oraya true Veya Çocuklara Özel Olmayacaksa false Yazınız.
// - Kayıt Edilecek Videonun Bilgileri - //


// Otomatik Yapılan Constlar //
const credentials = { email: eposta, pass: sifre, recoveryemail: recovery }
const onVideoUploadSuccess = (videoUrl) => {
    console.log("Video YÜklendi.")
}
const video = { path: videolokasyonu, title: videoismi, description: videoaciklamasi, thumbnail: videofotografi, tags: videoetiketleri, skipProcessingWait: true, onProgress: (progress) => { console.log('Yükleme İlerlemesi:', progress) }, uploadAsDraft: false, isAgeRestriction: false, isNotForKid: false }
// - Otomatik Yapılan Constlar - //

upload (credentials, video).then(console.log("Yüklenen Videonun Linki:"),console.log) // Videoyu Yükleme Komutu.
