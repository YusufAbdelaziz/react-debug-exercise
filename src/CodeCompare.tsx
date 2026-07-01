// Shows the before/after code side by side. Used by the solution toggle.
export default function CodeCompare({ before, after }: { before: string; after: string }) {
  return (
    <div className="cc">
      <div className="cc-col cc-bad">
        <div className="cc-head">❌ Before</div>
        <pre>{before}</pre>
      </div>
      <div className="cc-col cc-good">
        <div className="cc-head">✅ After</div>
        <pre>{after}</pre>
      </div>
    </div>
  );
}
