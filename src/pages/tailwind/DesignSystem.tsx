const TailwindDesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      {/* COLOR */}
      <div className="flex flex-col gap-4 p-4">
        <p className="text-title3 border-b-2 border-gray-900 p-1">COLOR</p>
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
        <p className="text-title3 border-b-2 border-gray-900 p-1">TYPOGRAPHY</p>
        <div>
          <p className="text-title1">Title1</p>
          <p className="text-title2">Title2</p>
          <p className="text-title3">Title3</p>
          <p className="text-title4">Title4</p>
        </div>
        <div>
          <p className="text-body1">Body1</p>
          <p className="text-body2">Body2</p>
          <p className="text-body3">Body3</p>
        </div>
        <div>
          <p className="text-label1">Label1</p>
          <p className="text-label2">Label2</p>
          <p className="text-label3">Label3</p>
        </div>
        <div>
          <p className="text-caption1">Caption1</p>
          <p className="text-caption2">Caption2</p>
        </div>
      </div>
    </div>
  );
};

export default TailwindDesignSystemPage;
