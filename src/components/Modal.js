export default function Modal({ handleShowModal }) {
  return (
    <section className="fixed inset-0 z-50 flex items-center w-100 justify-center min-h-screen" onClick={handleShowModal}>
      <div className="fixed inset-0 bg-black opacity-35"></div>
      <div className="bg-white p-0 md:p-6 z-10">
        <div className="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
          <div className="absolute w-full h-full">
            <iframe
              title="Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}