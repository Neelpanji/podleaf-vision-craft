
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
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-podleaf-300">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-podleaf-100 to-leaf-100 flex items-center justify-center text-podleaf-600 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          to={link}
          className="text-podleaf-600 font-medium inline-flex items-center group"
        >
          Learn More{' '}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
