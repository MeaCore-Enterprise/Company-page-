'use client';

import { useEffect, useState } from 'react';
import { Line, LineChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useI18n } from '@/locales/client';

const generateDataPoint = (time: Date) => ({
  time: time.toLocaleTimeString(),
  users: Math.floor(Math.random() * (500 - 300 + 1) + 300),
});

export default function FirestoreMetrics() {
  const { t } = useI18n();
  const [chartData, setChartData] = useState(() => {
    const now = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const time = new Date(now.getTime() - (6 - i) * 2000);
      return generateDataPoint(time);
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = [...prevData.slice(1), generateDataPoint(new Date())];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="metrics" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">{t('metrics.title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                {t('metrics.description')}
            </p>
        </div>
        <Card className="mt-12 max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>{t('metrics.chart.title')}</CardTitle>
                <CardDescription>{t('metrics.chart.description')}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ChartContainer config={{}} className="h-full w-full">
                        <LineChart
                            data={chartData}
                            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} />
                            <Tooltip
                                content={<ChartTooltipContent />}
                                cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 2, strokeDasharray: '3 3' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="users"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 8, style: { fill: 'hsl(var(--primary))' } }}
                            />
                        </LineChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
