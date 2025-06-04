const TailwindDesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      {/* COLOR */}
      <div className="flex flex-col gap-4 p-4">
        <p className="text-title-l border-b-2 border-gray-900 p-1">COLOR</p>
        <div className="flex">
          <div className="w-10 h-10 bg-white" />
          <div className="w-10 h-10 bg-black" />
        </div>
        <div className="flex">
          <div className="w-10 h-10 bg-gray-100" />
          <div className="w-10 h-10 bg-gray-200" />
          <div className="w-10 h-10 bg-gray-300" />
          <div className="w-10 h-10 bg-gray-400" />
          <div className="w-10 h-10 bg-gray-500" />
          <div className="w-10 h-10 bg-gray-600" />
          <div className="w-10 h-10 bg-gray-700" />
          <div className="w-10 h-10 bg-gray-800" />
          <div className="w-10 h-10 bg-gray-900" />
        </div>
      </div>

      {/* TYPOGRAPHY */}
      <div className="flex flex-col gap-4 p-4">
        <p className="text-title-l border-b-2 border-gray-900 p-1">TYPOGRAPHY</p>
        <div>
          <p className="text-title-2xl">Title/2XL</p>
          <p className="text-title-xl">Title/XL</p>
          <p className="text-title-l">Title/L</p>
          <p className="text-title-m">Title/M</p>
          <p className="text-title-s">Title/S</p>
        </div>
        <div>
          <p className="text-body-xl">Body/XL</p>
          <p className="text-body-l">Body/L</p>
          <p className="text-body-m">Body/M</p>
          <p className="text-body-s">Body/S</p>
        </div>
        <div>
          <p className="text-label-l">Label/L</p>
          <p className="text-label-m">Label/M</p>
          <p className="text-label-s">Label/S</p>
          <p className="text-label-xs">Label/XS</p>
        </div>
        <div>
          <p className="text-caption-m">Caption/M</p>
          <p className="text-caption-s">Caption/S</p>
          <p className="text-caption-xs">Caption/XS</p>
        </div>
      </div>
    </div>
  );
};

export default TailwindDesignSystemPage;
