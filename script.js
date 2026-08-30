$(document).ready(function() {
    // Efek Klik pada Card Produk (Menampilkan Modal Detail)
    $('.card-product').on('click', function() {
        const category = $(this).attr('data-category') || 'Produk';
        const title = $(this).attr('data-title') || $(this).find('h3').text();
        const price = $(this).attr('data-price') || 'Hubungi Kami';
        const desc = $(this).attr('data-desc') || 'Deskripsi lengkap produk tidak tersedia.';
        
        // Update isi modal
        $('#modal-product-category').text(category);
        $('#modal-product-title').text(title);
        $('#modal-product-price').text(price);
        $('#modal-product-desc').text(desc);
        
        // Tampilkan modal (flex) dan buat transisi masuk
        $('#product-modal').removeClass('hidden');
        setTimeout(function() {
            $('#product-modal .relative').removeClass('scale-95 opacity-0').addClass('scale-100 opacity-100');
        }, 10);
    });

    // Fungsi Menutup Modal
    function closeModal() {
        $('#product-modal .relative').removeClass('scale-100 opacity-100').addClass('scale-95 opacity-0');
        setTimeout(function() {
            $('#product-modal').addClass('hidden');
        }, 300);
    }

    // Klik tombol close atau area backdrop untuk menutup modal
    $('#modal-close, #modal-backdrop').on('click', closeModal);
    
    // Klik tombol pesanan di dalam modal (mengarah ke Google Form)
    $('#modal-order-btn').on('click', function() {
        closeModal();
        window.open('https://forms.gle/YOUR_GOOGLE_FORM_ID', '_blank');
    });


    const teamMembers = [
        { name: "Azril Firansyah.H" },
        { name: "Mario Christopher.I" },
        { name: "Laili Risqi" },
        { name: "Mas Osama" }
    ];

    let currentIndex = 0;

    function renderSlider() {
        const total = teamMembers.length;
        const leftIndex = (currentIndex - 1 + total) % total;
        const centerIndex = currentIndex;
        const rightIndex = (currentIndex + 1) % total;

        // Efek Pudar Sederhana Tanpa Merusak Layout Class
        $('.avatar-card').addClass('opacity-0');

        setTimeout(function() {
            // Update Isi Teks
            $('#avatar-left .name-tag').text(teamMembers[leftIndex].name);
            $('#avatar-center .name-tag').text(teamMembers[centerIndex].name);
            $('#avatar-right .name-tag').text(teamMembers[rightIndex].name);

            $('#character-title').text(`MEMBER ${centerIndex + 1} OF ${total}`);

            // Kembalikan Opacity Asli
            $('#avatar-left, #avatar-right').removeClass('opacity-0').addClass('opacity-40');
            $('#avatar-center').removeClass('opacity-0').addClass('opacity-100');
        }, 150);
    }

    $('#btn-next').on('click', function() {
        currentIndex = (currentIndex + 1) % teamMembers.length;
        renderSlider();
    });

    $('#btn-prev').on('click', function() {
        currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
        renderSlider();
    });

    $('#avatar-left').on('click', function() { $('#btn-prev').click(); });
    $('#avatar-right').on('click', function() { $('#btn-next').click(); });

    renderSlider();
});