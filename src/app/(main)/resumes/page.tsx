import { canCreateResume } from "@/lib/permissions";
import prisma from "@/lib/prisma";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import CreateResumeButton from "./CreateResumeButton";
import ResumeItem from "./ResumeItem";
import { TemplateItem } from "./TemplateItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume Dashboard",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount, subscriptionLevel] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
    getUserSubscriptionLevel(userId),
  ]);

  return (
    <div className="flex min-h-screen flex-col" suppressHydrationWarning>
      <div>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <CreateResumeButton
            canCreate={canCreateResume(subscriptionLevel, totalCount)}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Resumes
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscription Level
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold capitalize">
                  {subscriptionLevel.toUpperCase().replace("_", " ")}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid mt-6 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resumes.map((resume) => (
              <ResumeItem key={resume.id} resume={resume} />
            ))}
          </div>

          {/* <Tabs defaultValue="resumes" className="mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="resumes">Your Resumes</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <TabsContent value="resumes" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {resumes.map((resume) => (
                  <ResumeItem key={resume.id} resume={resume} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="templates" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <TemplateItem />
              </div>
            </TabsContent>
          </Tabs> */}
        </div>
      </div>
    </div>
  );
}
