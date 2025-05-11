// components/FootballStatsUploader.tsx
import Papa from 'papaparse';
import { useState } from 'react';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { StatChat } from '~/pages/FootballStats/StatsChat/StatsChat';

export function FootballStatsUploader(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [parsedData, setParsedData] = useState<Record<string, any>[] | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (Array.isArray(results.data)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setParsedData(results.data as Record<string, any>[]);
        }
      },
    });
  };

  return (
    <ApplicationLayout center heading="Football Stats">
      {!parsedData ? (
        <div>
          <input type="file" accept=".csv" onChange={handleFile} />
        </div>
      ) : (
        <StatChat data={parsedData} />
      )}
    </ApplicationLayout>
  );
}

export default FootballStatsUploader;
