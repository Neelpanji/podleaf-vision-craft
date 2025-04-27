
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg bg-white border-gray-100">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          to={link}
          className="text-primary font-medium inline-flex items-center group"
        >
          Learn More{' '}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
