function krediHesapla()
{
    var cekilicekTutar,vadeSayisi;
    var aylikTaksit,odenecekTutar;

    cekilicekTutar = document.getElementById('txtKrediTutari').value;
    var liste = document.getElementById('listeVade');
    vadeSayisi = liste.options[liste.selectedIndex].value;

    if(vadeSayisi == 12)
    {
        odenecekToplamTutar = cekilicekTutar * 1.1;
    }
    else if(vadeSayisi == 24)
    {
        odenecekToplamTutar = cekilicekTutar * 1.2;
    }
    else if(vadeSayisi == 36)
    {
        odenecekToplamTutar = cekilicekTutar * 1.3;
    }
    else if(vadeSayisi == 48)
    {
        odenecekToplamTutar = cekilicekTutar * 1.4;
    }
    
    aylikTaksit = odenecekToplamTutar / vadeSayisi;

    document.querySelector("#sonuc").innerHTML = "Geri Ödenecek Toplam Tutarınız: " + odenecekToplamTutar + "<br>" + "Aylık Taksit Tutarınız: " + aylikTaksit.toFixed(2);

}