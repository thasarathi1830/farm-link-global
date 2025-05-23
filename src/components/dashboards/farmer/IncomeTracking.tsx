
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Briefcase } from 'lucide-react';
import WorkHistoryModal from './WorkHistoryModal';

const IncomeTracking = () => {
  const [isWorkHistoryOpen, setIsWorkHistoryOpen] = useState(false);

  const openWorkHistory = () => {
    setIsWorkHistoryOpen(true);
  };

  const closeWorkHistory = () => {
    setIsWorkHistoryOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" /> Income Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">₹32,400</div>
        <p className="text-sm text-muted-foreground mb-4">Total earnings this year</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Current month</span>
            <span className="font-medium">₹8,500</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Previous month</span>
            <span className="font-medium">₹7,800</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span>Growth</span>
            <span className="font-medium">+9%</span>
          </div>
        </div>
        
        <Button 
          size="sm" 
          variant="outline" 
          className="w-full mt-4"
          onClick={openWorkHistory}
        >
          <Briefcase className="mr-2 h-4 w-4" /> View Work History
        </Button>
        
        {/* Work History Modal */}
        <WorkHistoryModal 
          isOpen={isWorkHistoryOpen} 
          onClose={closeWorkHistory} 
          farmerId="1" // In a real app, this would be the actual farmer ID
        />
      </CardContent>
    </Card>
  );
};

export default IncomeTracking;
