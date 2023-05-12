function Summary({ summary }) {
  return (
    <div className="flex flex-col  gap-4">
      <h2 className="font-satoshi font-bold text-gray-600 text-xl">
        <span className="article_summary_gradient">Article Summary</span>
      </h2>
      <div className="summary_box">
        <p className="font-inter font-medium text-sm text-gray-900">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default Summary;
